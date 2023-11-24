
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(express.static('static'));

// import { Config } from 'config.js';
// add comment for push
//This is the heroku app
//keep app.use with app.get and this block serves index with
//functioning links 
app.use(bodyParser.urlencoded({extended: true}));
app.post("/", function(req, res){
  $('#log').click(function(){
    const user_id = Number($('#user_id').val());
    
    alert(user_id);
   });
  res.sendFile(__dirname + "/index.html");
});
app.post("/about.html", function(req, res){
  res.sendFile(__dirname + "/about.html");
});
app.post("/asphalt.html", function(req, res){
  res.sendFile(__dirname + "/asphalt.html");
});
app.post("/tpo.html", function(req, res){
  res.sendFile(__dirname + "/tpo.html");
});
app.post("/insulation.html", function(req, res){
  res.sendFile(__dirname + "/insulation.html");
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
})