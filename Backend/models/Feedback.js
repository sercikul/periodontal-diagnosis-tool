const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

const FeedbackSchema = new Schema({
        feedback: {
            type: String,
            required: true
        },
    date: {
            type: Date,
            default: Date.now
    }
},
    // Specifying the collection to send/fetch the data to/from
    { collection: 'Feedback' });

module.exports = FeedbackBackend = mongoose.model('feedback', FeedbackSchema);
