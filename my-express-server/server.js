// jshint esversion: 6
const express = require ("express");
var app = express();
const bodyParser = require ("body-parser");

app.listen(3000);
app.get("/", function (req, res){
  res.send("<h1> Hello World </h1>");
    console.log (req);
app.get("/contact", function(req, res){
res.send("<h1>contat: anuja@anuj.com</h1>");
});

});
