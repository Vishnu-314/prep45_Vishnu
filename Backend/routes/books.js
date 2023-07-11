
//importing express,books model, express router
const express = require("express");
const Books = require("../models/books");

const router = express.Router();

//POST API to add books
router.post("/addBook",  async(req, res) => {

  try{
    {
      //creating a new book data by taking details from the request body
      let  book= await Books.create({
        title: req.body.title,
        author: req.body.author,
        })
      console.log(book);
    }
    //if the respose is success this will be the result
    res.json({
      status: "success",
      result: "books are added to the database"
    })

    //if any err occurs than we will handle by this 400 status code
  }catch(err){
    console.error(err.message);
    res.status(400).json({
      status: "failure",
      message: err.message
    })
  }
});


// get method to show all the books present in the data base
router.get('/getAllBooks', async (req, res) => {
    try {
      // trying to get the books data using find method 
      const getData = await Books.find();
      res.json({
        status: "success",
        result: getData
      })

      //hadling the error
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        status: "failure",
        message: err.message
      })
    }
  })

  //delete route to delete the book with sepcific id
  router.delete("/deleteBook/:id", async(req, res) => {
    try {

      //checking and deleting the book with the id given in parameters
      const book = await Books.findByIdAndDelete(req.params.id);
      if (book) {
        res.json({
          status: "success",
          result: "book is deleted"
        });

        //handling the error
      } else {
        res.status(400).json({
          status: "failure",
          message: "book not found"
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        status: "failure",
        message: err.message
      });
    }
  });


  //exporting the module
module.exports = router;
