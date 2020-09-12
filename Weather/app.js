//jshint esversion:6
const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req, res){

var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=25d072c7d0b0a6127857db183092c853";
https.get(url, function(response){
//console.log(response);
//res.send ("status is = " + response.statusCode);
response.on("data", function(data){
  const weatherData = JSON.parse(data);
  const temp = weatherData.main.temp;
  const desc = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon
  //const icon = http://openweathermap.org/img/wn/10d@2x.png
  //    <img src=http://openweathermap.org/img/wn/04n@2x.png>
  const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
  //res.write("Temp is " + temp);
  res.write("<h1>desc is " + desc + "</h1>");
  res.write("<img src=" + imageUrl +">");
  res.send();
  //res.send("<h1> Temprature is "  + temp + "  Degree <h1>");
});
});
//res.send ("Server is up and running");

});
app.listen("3000", function(){
console.log ("express running on 3000");
});
