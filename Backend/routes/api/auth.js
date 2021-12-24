const express = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');
const auth = require('../../middleware/auth');
const Doctor = require('../../models/Doctor');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

// @route   POST api/auth
// @desc    Test route
// @access  Private

router.get('/', auth, async (req,res) => {
    try {

        const doctor = await Doctor.findById(req.doctor.id).select('-password')
        res.json(doctor)

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

/////////////////////////////////

// @route   POST api/auth
// @desc    Login (authenticate) as a doctor
// @access  Public

// Login API

router.post(
    "/",
    [
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Password is required"
        ).exists(),
    ],

    async (req, res) => {
        // Checking for error in the data input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //  Destructuring the request
        const {email, password} = req.body;

        try {
            // Check for existing user
            let doctor = await Doctor.findOne({ email });

            if (!doctor)
                return res.status(400).json({ err: [{ msg: "Invalid Credentials" }] });

            const isMatch = await bcrypt.compare(password, doctor.password);

            if(!isMatch)
                return res.status(400).json({ err: [{ msg: "Invalid Credentials" }] });

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

module.exports = router;

