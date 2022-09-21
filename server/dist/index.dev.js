"use strict";

var express = require('express');

var mongoose = require('mongoose');

var authRouter = require('./routes/auth');

var PORT = 3000;
var app = express();
var DB = "mongodb+srv://sj15:Sourav6996@cluster0.i4msquv.mongodb.net/?retryWrites=true&w=majority"; //Middleware

app.use(express.json());
app.use(authRouter); //Connections

mongoose.connect(DB).then(function () {
  console.log("Connection succesful");
})["catch"](function (e) {
  console.log(e);
});
app.listen(PORT, "0.0.0.0", function () {
  console.log("connected at Port ".concat(PORT));
});