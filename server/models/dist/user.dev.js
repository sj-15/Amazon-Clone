"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: function validator(value) {
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.toLowerCase().match(re);
      },
      message: "Please enter a validate email address"
    }
  },
  password: {
    required: true,
    type: String
  },
  address: {
    type: String,
    "default": ""
  },
  type: {
    type: String,
    "default": "user"
  }
});
var User = mongoose.model("User", userSchema);
module.exports = User;