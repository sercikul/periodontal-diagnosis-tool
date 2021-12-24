const express = require('express');
const {check, validationResult,param} = require('express-validator/check');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Assessment = require('../../models/Assessment');
const Patient = require('../../models/Patient')
const multer = require("multer");
const path = require('path');
const mongoose = require("mongoose");
const {v4: uuidv4} = require('uuid');
const { ObjectId } = require('mongoose');



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const teeth_implants_upload = (req) =>{
    const assessment = new Assessment(req.body);

    assessment['doctorId'] = jwt.decode(req.body.doctorId).doctor.id

    if (req.body.hasOwnProperty('11')){
        const teethIds = [11,12,13,14,15,16,17,18,
            21,22,23,24,25,26,27,28,
            31,32,33,34,35,36,37,38,
            41,42,43,44,45,46,47,48];
        teethIds.forEach(toothId => {
            let toothData = JSON.parse(req.body[toothId])
            assessment[toothId] = {
                Note:toothData['Note'],
                Mobility:toothData['Mobility'],
                "Tooth Status":toothData['Tooth Status'],
                "Furcation":{
                    "Furcation Buccal":toothData.Furcation['Furcation Buccal'],
                    "Furcation Lingual 1":toothData.Furcation['Furcation Lingual 1'],
                    "Furcation Lingual 2":toothData.Furcation['Furcation Lingual 2']
                },
                BoP:{
                    "BoP Buccal 1":toothData.BoP['BoP Buccal 1'],
                    "BoP Buccal 2":toothData.BoP['BoP Buccal 2'],
                    "BoP Buccal 3":toothData.BoP['BoP Buccal 3'],
                    "BoP Lingual 1":toothData.BoP['BoP Lingual 1'],
                    "BoP Lingual 2":toothData.BoP['BoP Lingual 2'],
                    "BoP Lingual 3":toothData.BoP['BoP Lingual 3'],
                    "BoP Score":toothData.BoP['BoP Score']
                },
                "Plague":{
                    "Plague Buccal 1":toothData.Plague['Plague Buccal 1'],
                    "Plague Buccal 2":toothData.Plague['Plague Buccal 2'],
                    "Plague Buccal 3":toothData.Plague['Plague Buccal 3'],
                    "Plague Lingual 1":toothData.Plague['Plague Lingual 1'],
                    "Plague Lingual 2":toothData.Plague['Plague Lingual 2'],
                    "Plague Lingual 3":toothData.Plague['Plague Lingual 3'],
                    "Plague Score":toothData.Plague['Plague Score']
                },
                "Gingival Margin":{
                    "GM Buccal 1":toothData['Gingival Margin']['GM Buccal 1'],
                    "GM Buccal 2":toothData['Gingival Margin']['GM Buccal 2'],
                    "GM Buccal 3":toothData['Gingival Margin']['GM Buccal 3'],
                    "GM Lingual 1":toothData['Gingival Margin']['GM Lingual 1'],
                    "GM Lingual 2":toothData['Gingival Margin']['GM Lingual 2'],
                    "GM Lingual 3":toothData['Gingival Margin']['GM Lingual 3']
                },
                "Probing Depth":{
                    "PD Buccal 1":toothData['Probing Depth']['PD Buccal 1'],
                    "PD Buccal 2":toothData['Probing Depth']['PD Buccal 2'],
                    "PD Buccal 3":toothData['Probing Depth']['PD Buccal 3'],
                    "PD Lingual 1":toothData['Probing Depth']['PD Lingual 1'],
                    "PD Lingual 2":toothData['Probing Depth']['PD Lingual 2'],
                    "PD Lingual 3":toothData['Probing Depth']['PD Lingual 3']
                }
            }
        })
    }

    if (req.body.hasOwnProperty('i11')){
        const implantIds = ["i11","i12","i13","i14","i15","i16","i17","i18",
            "i21","i22","i23","i24","i25","i26","i27","i28",
            "i31","i32","i33","i34","i35", "i36","i37","i38",
            "i41","i42","i43","i44", "i45", "i46", "i47", "i48"];
        implantIds.forEach(implantId =>
        {
            // console.log(implantId)
            let implantData = JSON.parse(req.body[implantId])
            assessment[implantId] = {
                Q1:implantData['Q1'],
                Q2:implantData['Q2'],
                Q2a:implantData['Q2a'],
                Q3:implantData['Q3'],
                Q3a:implantData['Q3a'],
                Q4:implantData['Q4'],
                ToothStatus:implantData['ToothStatus']
            }
            // console.log(assessment[implantId])
        })}
    return(assessment)
}

// Private POST API to upload an image
// Don't forget to add auth
router.post('/', auth, async (req,res,next) => {
        // console.log("Assessment body",req.body)

    try{
        const assessment = teeth_implants_upload(req);

        const assessmentRes = await assessment.save()

        const payload ={
            id: assessmentRes._id,
            date: assessmentRes.date
        };

        return(res.status(200).json(payload))
    }

    catch(err){console.log("Assessment errors:",err.message)}


});

router.post('/image/:assessmentId', auth, upload.single('xRayImage'), async (req,res,next) => {
    try{
        await Assessment.findByIdAndUpdate({ _id: req.params.assessmentId}, {xRayImage: req.file.path});
        return(res.status(200).json("Image successfully uploaded"));
    }
    catch(err) {
        console.log("Image upload errors:",err.message)
    }

})

// Private DELETE API to delete an appointment
// Don't forget to add auth
router.delete("/",
    [check("assessmentId", "Invalid appointment ID").not().isEmpty().isLength({ max:24, min:24 })],
    auth,
    async (req, res, next) => {

        //Check to see whether the assessment ID is the right length
        const errors = validationResult(req);
        console.log("Errors:",errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let assessment = await Assessment.findOne({ _id: req.body.assessmentId});
        // console.log("Assessment found:",assessment)
        if (assessment == null)
            return res.status(400).json({ err: [{ msg: "No appointment with such ID" }]});

        try{

            await Assessment.remove({ _id: req.body.assessmentId })
            // await Assessment.deleteOne()
            res.status(200).json({
                message: 'Appointment deleted'
            })
        }
        catch(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    });


//Updating appointment details

router.post("/update/:assessmentId", auth,
    [param("assessmentId", "Assessment not found").not().isEmpty().isLength({ max:24, min:24 })],
    async (req,res,next) => {

        // console.log("Assessment ID:",req.params.assessmentId)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const assessment = teeth_implants_upload(req);
        delete assessment._id;
        delete assessment['AssessmentId']
        // console.log("New assessment:",assessment);


        try{
            await Assessment.findByIdAndUpdate({ _id: req.params.assessmentId}, {

            healthStatusSelected: assessment.healthStatusSelected,
            HealthStatusDetails: assessment.HealthStatusDetails,
            smokingCigarettes: assessment.smokingCigarettes,
            DegreeOfDiabetes: assessment.DegreeOfDiabetes,
            ImplantStatusDropItems: assessment.ImplantStatusDropItems,
            //
            PatientStatus: assessment.PatientStatus,
            detectableMarginalBoneLoss: assessment.detectableMarginalBoneLoss,
            CAL: assessment.CAL,
            buccalOrOralRecession: assessment.buccalOrOralRecession,
            BOPAAPScreening: assessment.BOPAAPScreening,

            BoPScore: assessment.BoPScore,
            PlagueScore: assessment.PlagueScore,
            DSScore: assessment.DSScore,

            screeningPeriodontitis: assessment.screeningPeriodontitis,
            teethLoss: assessment.teethLoss,
            BSPCalLoss: assessment.BSPCalLoss,
            isEvidence: assessment.isEvidence,
            bopValue: assessment.bopValue,
            bpeValue: assessment.bpeValue,
            initialTherapy: assessment.initialTherapy,

            collapsedBite: assessment.collapsedBite,
            isOcculusion: assessment.isOcculusion,
            teethDrifting: assessment.teethDrifting,
            mobility: assessment.mobility,
            ridgeDefect: assessment.ridgeDefect,
            opposingPairs: assessment.opposingPairs,

            boneLoss: assessment.boneLoss,
            periodontitis: assessment.periodontitis,

            BSPscreeningDiagnosis: assessment.BSPscreeningDiagnosis,
            BSPScreeningPrelimDiagnosis: assessment.BSPScreeningPrelimDiagnosis,
            AAPscreeningDiagnosis: assessment.AAPscreeningDiagnosis,
            GingivitisDiagnosis: assessment.GingivitisDiagnosis,
            Periodontitis: assessment.Periodontitis,
            FinalStaging: assessment.FinalStaging,
            FinalGrading: assessment.FinalGrading,
            FinalStability: assessment.FinalStability,
            AssessmentFeedback:assessment.AssessmentFeedback,
            AllImplants:assessment.AllImplants,
            messageForChart:assessment.messageForChart,
            //Teeth
            11:assessment[11],
            12:assessment[12],
            13:assessment[13],
            14:assessment[14],
            15:assessment[15],
            16:assessment[16],
            17:assessment[17],
            18:assessment[18],
            21:assessment[21],
            22:assessment[22],
            23:assessment[23],
            24:assessment[24],
            25:assessment[25],
            26:assessment[26],
            27:assessment[27],
            28:assessment[28],
            31:assessment[31],
            32:assessment[32],
            33:assessment[33],
            34:assessment[34],
            35:assessment[35],
            36:assessment[36],
            37:assessment[37],
            38:assessment[38],
            41:assessment[41],
            42:assessment[42],
            43:assessment[43],
            44:assessment[44],
            45:assessment[45],
            46:assessment[46],
            47:assessment[47],
            48:assessment[48],
        //    Implants
            i11:assessment["i11"],
            i12:assessment["i12"],
            i13:assessment["i13"],
            i14:assessment["i14"],
            i15:assessment["i15"],
            i16:assessment["i16"],
            i17:assessment["i17"],
            i18:assessment["i18"],
            i21:assessment["i21"],
            i22:assessment["i22"],
            i23:assessment["i23"],
            i24:assessment["i24"],
            i25:assessment["i25"],
            i26:assessment["i26"],
            i27:assessment["i27"],
            i28:assessment["i28"],
            i31:assessment["i31"],
            i32:assessment["i32"],
            i33:assessment["i33"],
            i34:assessment["i34"],
            i35:assessment["i35"],
            i36:assessment["i36"],
            i37:assessment["i37"],
            i38:assessment["i38"],
            i41:assessment["i41"],
            i42:assessment["i42"],
            i43:assessment["i43"],
            i44:assessment["i44"],
            i45:assessment["i45"],
            i46:assessment["i46"],
            i47:assessment["i47"],
            i48:assessment["i48"],


        }, {new: true}).then(result => {
                    // res.json({
                    //    console.log("Return from API",result)
                    // });
                })
        }


    catch(err){
            console.error(err.message);
            if(err.kind == 'ObjectId' || err.kind == 'CastError'){
                res.status(400).json({ err: [{ msg: "Assessment not found" }]});
            }
            res.status(500).send('Server Error');
        };
});

// Get assessments for a particular Dentist
router.get('/getAllAssessments/:doctorId', auth, async (req,res,next) => {

    const id = await jwt.decode(req.params.doctorId).doctor.id;

    try{

        await Assessment.aggregate([
            {
                $project: {"A": "$$ROOT", "_id": 0}
            },
            {
                $lookup: {
                    localField: "A.patientId",
                    from: "Patients",
                    foreignField: "_id",
                    as: "P"
                }
            },
            {
                $unwind: {
                    path: "$P",
                    preserveNullAndEmptyArrays: false
                }
            },
            {
                $match: {"A.doctorId": mongoose.Types.ObjectId(id)}
            },
            {
                $project: {"_id": "$A._id", "date": "$A.date", "AssessmentType": "$A.AssessmentType", "firstName": "$P.firstName", "lastName": "$P.lastName", "MRN": "$P.MRN", "DOB": "$P.DOB"}
            }
        ]).then(assessments => {
            console.log(assessments);
            return res.json(assessments)})

    }
    catch(err){
        return res.status(400).json(err.message);
    }
});

// Get all patients that belong to this Doctor
router.get('/getAllPatients/:doctorId', auth, async (req,res,next) => {

    const id = jwt.decode(req.params.doctorId).doctor.id;

    try{
        Assessment.aggregate([
        {
            $project: {"A": "$$ROOT", "_id": 0}
        },
        {
            $lookup: {
                localField: "A.patientId",
                from: "Patients",
                foreignField: "_id",
                as: "P"
            }
        },
        {
            $unwind: {
                path: "$P",
                preserveNullAndEmptyArrays: false
            }
        },
        {
            $match: {"A.doctorId": mongoose.Types.ObjectId(id)}
        },
        {
            $group: {
                _id: {"P᎐_id": "$P._id", "P᎐firstName": "$P.firstName", "P᎐lastName": "$P.lastName", "P᎐MRN": "$P.MRN", "P᎐DOB": "$P.DOB"}
            }
        },
        {
            $project: {"_id": "$_id.P᎐_id", "firstName": "$_id.P᎐firstName", "lastName": "$_id.P᎐lastName", "MRN": "$_id.P᎐MRN", "DOB": "$_id.P᎐DOB"}
        }
    ])

        .then(patients => {
            console.log(patients);
            return res.json(patients)})
    }
    catch(err){
        return res.status(400).json(err.message);
    }
})

// Getting all of the assessments for a particular patient
router.post('/getAllAssessmentForOnePatient/:patientId', auth, async (req,res,next) => {

    const id = jwt.decode(req.body.doctorId).doctor.id;

    try{Assessment.aggregate([
                {
                    $project: {"A": "$$ROOT", "_id": 0}
                },
                {
                    $lookup: {
                        localField: "A.patientId",
                        from: "Patients",
                        foreignField: "_id",
                        as: "P"
                    }
                },
                {
                    $unwind: {
                        path: "$P",
                        preserveNullAndEmptyArrays: false
                    }
                },
                {
                    $match: {$and: [{"A.doctorId": {$eq: mongoose.Types.ObjectId(id)}}, {"A.patientId": {$eq: mongoose.Types.ObjectId(req.params.patientId)}}]}
                },
                {
                    $project: {"date": "$A.date", "firstName": "$P.firstName", "lastName": "$P.lastName", "MRN": "$P.MRN", "DOB": "$P.DOB", "_id": "$A._id"}
                }
            ]).then(assessments => {
                console.log("Patient specific Assessments:",assessments);
                return res.json(assessments)})
    }
    catch(err){
        return res.status(400).json(err.message);
    }
})

router.post('/singleAssessment/:assessmentId', auth,async (req,res,next) => {
    const id = jwt.decode(req.body.doctorId).doctor.id;
    console.log("Doctor id:",id)
    try {

        const assessment = await Assessment.findOne({_id: req.params.assessmentId, doctorId: id});
        if (!assessment)
            return res.status(400).json({err: [{msg: "No appointment exists"}]});

        const assessment_stringify = JSON.stringify(assessment)
        console.log(assessment_stringify)
        return res.status(200).json(assessment_stringify)
    }
    catch(err){
        console.log(err)
        return res.status(400).json(err.message);
    }

});


module.exports = router;