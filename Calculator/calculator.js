//jshint esversion:6
const express  = require ("express");
const app = express();
const bodyParser = require ("body-parser");
//const body = bodyParser();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
//Console.log ("server is running on 3000");
});
app.get("/", function(req,res){
res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(req, res){
  console.log(req.body);
  var n1 = Number(req.body.we);
  var n2 =  Number(req.body.he);
  var bmi = n1 + n2;
res.send("<html>bmi</html>" + bmi);
});
