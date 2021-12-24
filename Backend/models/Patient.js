const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

const PatientSchema = new Schema({
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        DOB: {
            type:Date,
            required: true,
            trim: true,
        },
        MRN: {
            type: String,
            required: true
        },
        Date: {
            type: Date,
            default: Date.now
        }
    },
    // Specifying the collection to send/fetch the data to/from
    { collection: 'Patients' });

module.exports = PatientSchemaBackend = mongoose.model('Patients', PatientSchema);
