const mongoose = require('mongoose');
const config = require('config');

// DB Config
const db = config.get("mongoURI");

const connectDB = async() =>{
    try{
        // Connect to MongoDb via Mongoose
        await
            mongoose
                .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
                .then(()=>console.log("MongoDB connected..."))
    }
    catch(err){
    console.error(err => console.log((err)));
    process.exit(1);
    }
}

module.exports = connectDB;