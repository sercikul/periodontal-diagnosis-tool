const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const DoctorSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    PasswordResetToken:{
      type: String
    },
    tokenExpirationDate:{
      type: Date
    },
    RegistrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  // Specifying the collection to send/fetch the data to/from
  { collection: "Doctors" }
);

module.exports = Doctor = mongoose.model("doctor", DoctorSchema);
