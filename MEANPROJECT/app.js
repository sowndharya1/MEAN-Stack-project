var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var User = require('./models/medicine');
var http=require('http');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/medicine");
var Schema=mongoose.Schema;
mongoose.connection.once("open",function(){
  console.log("Database Connected");
});
app.use(express.static(__dirname+'/client'));
app.use(express.static(__dirname+'/public'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get('/listmed',(req,res)=>{
  User.find({},function(err,result){
  res.json(result)
  //console.log(result);
  })
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
