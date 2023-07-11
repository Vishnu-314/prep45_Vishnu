



const mongoose = require("mongoose");
//importing dte env module 
require("dotenv").config();

//asigning the URI by .env file which is secure to use
const mongoURI = process.env.MONGO_URI;

// connecting to the mongo db
const connectToMongo = () => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log('Connected to MongoDB');
          resolve();
        })
        .catch((error) => {
          console.error('Failed to connect to MongoDB:', error);
          reject(error);
        });
    });
  };

module.exports = connectToMongo;
