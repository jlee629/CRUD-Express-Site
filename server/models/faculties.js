/* faculties.js, Jungyu Lee, 301236221, Faculty Information */ 
let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
