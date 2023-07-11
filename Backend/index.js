//importing mongo db module,express,
const connectToMongo = require("./db");
const express = require("express");

//creating a app module using express
const app = express();

//assigning a port number
const port = 5000 || process.env.PORT;

//importing the books route
const books=require('./routes/books')

//;importinf the cors module
var cors = require("cors");
app.use(cors());
app.use(express.json());

//function is called, which is likely a custom function that establishes a connection to MongoDB. This function returns a promise.
connectToMongo()
//.then() method is called on the promise returned by connectToMongo()
  .then(() => {
    app.get('/', (req, res) => {
      res.send('Hello Welcome to prep45');
    });
//function is used to mount a middleware function, represented by the books variable, on the "/api" route.
    app.use('/api', books);

//function is called to start the server. It listens on a specified port
    app.listen(port, () => {
      console.log(`prep45 backend is listening on port ${port}`);
    });
  })

  //catch() block will execute, and the error will be logged to the console.
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  }); 
