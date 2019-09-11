var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var engine = require('ejs-locals');
const port = 3000;

// var PORT = 3000;
// app.listen(PORT || 3000, function () {
//   console.log('Connected !');
// });
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`report it server listening on port ${port}!`))