const express = require('express');
const router = express.Router();

//Feedback Model
const FeedbackBackendModel = require('../../models/Feedback');

// @route GET api/feedback
// @desc Get  all feedback
// @access Public

router.get('/retrieve', (req, res) => {
    FeedbackBackendModel.find()
        .then(feedback => res.json(feedback)
            .catch(err => res.json(err)))
});

// @route POST api/feedback
// @desc POST all feedback
// @access Public

router.post('/add', (req, res) => {
    const newFeedback = new FeedbackBackendModel({
        feedback: req.body.feedback
    });

    newFeedback.save()
        .then(feedback => res.json(feedback))
        .catch(err => res.json(err));
});


module.exports = router;

