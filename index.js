var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var engine = require('ejs-locals');
var nodemailer = require('nodemailer');

var PORT = 3000;
app.listen(PORT || 3000, function () {
  console.log('Connected !');
});