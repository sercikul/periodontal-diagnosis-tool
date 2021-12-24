const connectDB = require("./db");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors({origin: ['https://aapefp.azurewebsites.net', 'http://localhost:3000/']}));

//Bodyparser Middleware
app.use(express.json());

//Connecting to DB
connectDB();

// Use Routes
app.use("/api/doctors", require("./routes/api/doctors"));
app.use("/api/feedback", require("./routes/api/feedback"));
app.use('/api/auth', require('./routes/api/auth'));
app.use("/api/assessment", require("./routes/api/assessment"));
app.use("/api/patient", require("./routes/api/patient"));
app.use('/admin',require('./routes/api/admin.router'))

console.log("")
console.log("")
app.set("port", process.env.PORT || 5000);
console.log("+++++++++++++++" + app.get("port"));

app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

