//jshint esversion:6
const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
const https = require ("https");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extend: true}));
app.get("/",function(req, res){
  //res.send("Hi this is a GET function");
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function(req, res){

  var fName = req.body.firstName;
  var lName= req.body.lastName;
  var eMail = req.body.email;
  console.log (fName + lName + eMail);

});




 app.listen("3000", function(){
  console.log ("Server is running on 3000");
});
