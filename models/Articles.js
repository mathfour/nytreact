// Include the Mongoose Dependencies
// import mongoose from 'mongoose'
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
let ArticleSchema = new Schema({
  title: String,
  date: Date,
  url: String
});

// Create the Model
let Articles = mongoose.model("Articles", ArticleSchema);

// Export it for use elsewhere
// export default Articles
module.exports = Articles