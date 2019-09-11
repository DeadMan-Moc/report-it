var express = require('express');
var app = express();
var engine = require('ejs-locals');
var PORT;



app.engine('ejs', engine);
app.set("view engine", "ejs");

app.listen(PORT || 5000, function () {
    console.log('Connected !');
  });
  
  app.get('/', function(req, res){
   // res.render("/views/index", {});
  console.log("mnghjgjgjm")
  res.render('index.ejs', {})
  });
