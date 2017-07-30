const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Require Click schema
const Articles = require("./models/Articles");
// import Articles from './models/Articles'


// Create a new express app
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytreact');
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/saved", function(req, res) {
  
  Articles.find({}).exec(function(err, doc) {
    
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// app.post("/api/saved", function(req, res) {

  // var clickID = req.body.clickID;
  // var clicks = parseInt(req.body.clicks);

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  // Articles.findOneAndUpdate({
  //   articleID: clickID
  // }, {
  //   $set: {
  //     clicks: clicks
  //   }
  // }, { upsert: true }).exec(function(err) {
  //
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send("Updated Click Count!");
  //   }
  // });
// });

