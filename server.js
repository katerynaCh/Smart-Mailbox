var express = require('express');        // call express
var app  = express();                 // define our app using express
var bodyParser = require('body-parser');
var path  = require("path");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
//Enable CORS on the server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// See http://www.yelp.com/developers/documentation/v2/search_api

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//Handling the Yelp data return to the client
app.post("/",function(req,res){
  console.log(req.body);
})

app.get("/",function(req,res){
    r
  res.sendFile(path.join(__dirname+'/monitor.html'));

})
app.listen(port);
console.log('Magic happens on port ' + port);
