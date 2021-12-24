const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require('../../middleware/auth');

//Doctor  Model
const Patient = require("../../models/Patient");
const {param} = require("express-validator");

// @route   POST api/patient
// @desc    Register new patient
// @access  Private

// Creating new user API
router.post(
    "/",
    [
        check("DOB", "Please include a valid DOB").not().isEmpty(),
        check("MRN", "MRN required").not().isEmpty(),
    ], auth,

    async (req, res) => {
        // Checking for error in the data input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //  Destructuring the request
        const { firstName, lastName, DOB, MRN } = req.body;

        try {
            // Check for existing user
            let existingPatientId = await Patient.findOne({ MRN:MRN, DOB:DOB });

            if (existingPatientId)
                return res.status(200).json(existingPatientId._id);
            // res.status(400).json({ err: [{ msg: "User already exists" }] });

            //  If the user doesn't exist
            let patient = new Patient({
                firstName,
                lastName,
                DOB,
                MRN
            });

            const patientId = await patient.save();
            console.log("PatientId:",patientId)
            return(res.status(200).json(patientId._id))

        } catch (errors) {
            console.log(errors.message);
            res.status(500).send("Server error");
        }
    }
);

// @route   POST api/patient
// @desc    Update patient details
// @access  Private

// Update user API

router.post(
    "/update/:PatientId", [
        param("PatientId", "Patient not found").not().isEmpty().isLength({ max:24, min:24 }),
    ], auth, async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body)

        const updatePatient = new Patient;
        if (req.body.firstName !== null) (updatePatient.firstName = req.body.firstName);
        if (req.body.lastName !== null) (updatePatient.lastName = req.body.lastName);
        console.log(updatePatient)
        try{

            Patient.findByIdAndUpdate({_id: req.params.PatientId},
                                   {firstName: updatePatient.firstName,
                                            lastName: updatePatient.lastName})
                                   .then(result => {
                res.json({
                    result
                });
            })

        }
        catch(err){
            console.error(err.message);
        }
    }
    )


module.exports = router;