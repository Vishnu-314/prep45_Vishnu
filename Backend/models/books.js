const mongoose = require('mongoose');
//creating new books schema
const bookSchema = new mongoose.Schema({
  //adding title and author ,time stamp for the schema
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


//exporting the schema so we can use in other modules
module.exports = mongoose.model('Book', bookSchema);
