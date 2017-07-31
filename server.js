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
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });
//
// app.get("/api/saved", function(req, res) {
//
//   Articles.find({}).exec(function(err, doc) {
//
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/saved-articles", function (req, res) {
  Articles.find({}).sort({ "title": 1 }).exec(function (error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.json(doc);
    }
  });
});

app.post("/save-article", function (req, res) {
  var newArticle = new Articles(req.body);
  newArticle.save(function (error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.json(doc._id);
    }
  });
});

app.delete("/delete-article", function (req, res) {
  var deleteID = req.param("id");
  Articles.findByIdAndRemove(deleteID, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});