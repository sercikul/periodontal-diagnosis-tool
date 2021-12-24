const connectDB = require("./db");
const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
app.use(cors());

//Bodyparser Middleware
app.use(express.json());

// //Connecting to DB
connectDB();
//
// // Use Routes
app.use("/api/doctors", require("./routes/api/doctors"));
app.use("/api/feedback", require("./routes/api/feedback"));
app.use("/api/assessment", require("./routes/api/assessment"));
app.use("/api/patient", require("./routes/api/patient"));

//Enables Express to serve up the build we just created
app.use(express.static("./client/build"));

app.get("*", (req, res) => {
  //our GET route needs to point to the index.html in our build
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function () {
});


