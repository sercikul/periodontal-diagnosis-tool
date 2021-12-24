const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const moment = require('moment');

//Doctor  Model
const Doctor = require("../../models/Doctor");

// @route   POST api/doctor
// @desc    Register new doctor
// @access  Public

// Registration API
router.post(
  "/",
  [
    check("fname", "First name required").not().isEmpty(),
    check("lname", "Last name required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please include a password with 8 or more characters, " +
        "must include a letter and number"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    // Checking for error in the data input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //  Destructuring the request
    const { fname, lname, email, password } = req.body;

    try {
      // Check for existing user
      let doctor = await Doctor.findOne({ email });
      if (doctor)
        return res.status(400).json({ err: [{ msg: "User already exists" }] });

      //  If the user doesn't exist
      doctor = new Doctor({
        fname,
        lname,
        email,
        password,
      });

      // Create salt + hash to encrypt the password
      const salt = await bcrypt.genSalt(10);

      doctor.password = await bcrypt.hash(password, salt);

      await doctor.save();

      const payload = {
        doctor: {
          id: doctor.id
        },
      };

      jwt.sign(
        payload,
        config.get("jwtAAPEFP"),
        { expiresIn: 7200 },
        (err, token) => {
          // Error
          if (err) throw err;
          // Response
          res.json({
            token
            // doctor: {
            //   id: doctor.id,
            //   fname: doctor.fname,
            //   lname: doctor.lname,
            //   email: doctor.email,
            // },
          });
        }
      );
    } catch (errors) {
      console.log(errors.message);
      res.status(500).send("Server error");
    }
  }
);

// Sending password reset from login page
router.post("/passwordReset",
    check("email", "Please include a valid email").isEmail(),
    async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email} = req.body

      try {
        // Check for existing user
        await Doctor.findOne({ email:email }).then((doctor) => {
          if (!doctor){
            console.log("Invalid Credentials Provided, one tried the following email:",email)
            return res.status(400).json({ err: [{ msg: "Invalid Credentials" }] });
          } else
            {
              const PasswordResetToken = crypto.randomBytes(24).toString("hex");
              console.log(PasswordResetToken)

              doctor.updateOne(
                  {
              PasswordResetToken:PasswordResetToken,
              tokenExpirationDate: req.body.tokenExpirationDate
                          }
                          ).then(res => console.log("res:",res))
              console.log("Doctor successfully updated")

              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                  user: "aapefpnoreply@gmail.com",
                  pass: "AAPEFPadmin"
                }
              });

              const mailBody = {
                from: 'AAPEFP-classfier-no-reply@gmail.com',
                to: `${doctor.email}`,
                subject: 'AAP/EFP classifier - Password Reset',
                text: "You’ve recently requested to reset your password.\n" +
                    "Please follow the link to proceed\n\n"+
                    `https://aapefp.azurewebsites.net/resetpassword/${PasswordResetToken}`+
                    "\n\nIf you did not request password reset, please ignore this message, your password will " +
                    "remain unchanged."
              };

              console.log("Sending email across!");

              transporter.sendMail(mailBody, (err, res)=>{
                if (err){
                  console.error("An error has occurred:", err);
                }
                else
                {
                  console.log("Response:", res);
                  res.status(200).send("Recovery email has been sent");
                }
              });

            }
        });

      } catch (errors) {
        console.log(errors.message);
        res.status(500).send("Server error");
      }


})

// Sending new password to the DB
router.post(`/newPasswordReset/:token`,
    async (req, res) => {

      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({ errors: errors.array() });
      // }
      const{token} = req.params
      const {password} = req.body
      console.log("Token:",token)
      try {
        // Check for existing user
        await Doctor.findOne({ PasswordResetToken:token }).then(async (doctor) => {
          if (!doctor){
            console.log("Invalid token Provided")
            return res.status(400).json({ err: [{ msg: "Invalid Credentials" }] });
          }
          else{
            console.log("Token is valid")
          }
          console.log(doctor.tokenExpirationDate > Date.now())
          if (moment(doctor.tokenExpirationDate).valueOf() > Date.now()){

            const salt = await bcrypt.genSalt(10);
            console.log("Salt generated")

            const newPassword = await bcrypt.hash(password, salt);
            console.log("New password generated")

            await doctor.updateOne({password:newPassword})
                .then(async res => {
              console.log("res:", await res)
              console.log("Doctor successfully updated - backend")

            })

            return(res.status(200).send("Doctor successfully updated!"));

          }
          else{
            res.status(400).send("Request new password reset link")
          }

        });

      } catch (errors) {
        console.log(errors.message);
        res.status(500).send("Server error");
      }


    })

module.exports = router;