var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-locals');
var conf = {
  "TWITTER_CONSUMER_KEY": "FRIVyo4Ax525WaxgnygIUGwqS",
  "TWITTER_CONSUMER_SECRET": "aXh9CAFBQkTn5b2IU9vhPJLmRaJa7BTyRIHyaEWY2PaDkVqdiK",
  "TWITTER_BEARER_TOKEN":"AAAAAAAAAAAAAAAAAAAAAMMGAAEAAAAAl1zaFxbJVrz1UQJs0bFu8psu%2F8w%3DASpTSRv8J4KQ8qeHuzK1qafQ911CMXjK6KMTLLvpHf5yqHa0SP"
}

var Twitter = require('twitter');
// var indexRouter = require('./routes/index');
// var adminRouter = require('./routes/admin');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs', engine);
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static(__dirname + '/public'));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.post('/admin', (req, res) => res.render('admin', { title: 'Express' }));


var client = new Twitter({
  consumer_key: conf.TWITTER_CONSUMER_KEY,
  consumer_secret: conf.TWITTER_CONSUMER_SECRET,
  bearer_token: conf.TWITTER_BEARER_TOKEN
});

app.get('/', (req, res) => {
  // console.log(conf);
  client.get('search/tweets', {q: '#jhb'}, function(error, tweets, response) {
    console.log("Makes it into the client request function.");
    // console.log(tweets);
    // tweets.forEach(function(tweet){
    //   console.log(tweet);
    // } )

    // console.log(response);
    // console.log(error);
    // tweets.statuses.forEach(function(tweet) {
    //   console.log("tweet: " + tweet.text)
    // });
  });
  // res.render('index.ejs', {})
  // res.send(tweets, 200);
});

app.get('/admin', (req, res)=>{
  console.log("given");
  res.render('admin', { title: 'Express' });
});

app.get('/regUser', (req, res)=>{
  console.log("given");
  res.render('regUser', { title: 'Express' });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-locals');
var conf = {
  "TWITTER_CONSUMER_KEY": "FRIVyo4Ax525WaxgnygIUGwqS",
  "TWITTER_CONSUMER_SECRET": "aXh9CAFBQkTn5b2IU9vhPJLmRaJa7BTyRIHyaEWY2PaDkVqdiK",
  "TWITTER_BEARER_TOKEN":"AAAAAAAAAAAAAAAAAAAAAMMGAAEAAAAAl1zaFxbJVrz1UQJs0bFu8psu%2F8w%3DASpTSRv8J4KQ8qeHuzK1qafQ911CMXjK6KMTLLvpHf5yqHa0SP"
}

var Twitter = require('twitter');
// var indexRouter = require('./routes/index');
// var adminRouter = require('./routes/admin');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static(__dirname + '/public'));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.post('/admin', (req, res) => res.render('admin', { title: 'Express' }));


var client = new Twitter({
  consumer_key: conf.TWITTER_CONSUMER_KEY,
  consumer_secret: conf.TWITTER_CONSUMER_SECRET,
  bearer_token: conf.TWITTER_BEARER_TOKEN
});

app.get('/', (req, res) => {
  
  client.get('search/tweets', {q: '#water #jhb'}, function(error, tweets, response) {
    console.log("Makes it into the client request function.");
    // console.log(tweets);
    if (tweets) {
      res.render('index.ejs', {title: "Hello"});
      return;
      // tweets.statuses.forEach(function(tweet) {
      //   console.log(tweet);
      // })
    } else {
      console.log(error);
    }
  });
  res.render('index.ejs', {title: "Hello"})
});

app.get('/admin', (req, res)=>{
  console.log("given");
  res.render('admin', { title: 'Express' });
});

app.get('/regUser', (req, res)=>{
  console.log("given");
  res.render('regUser', { title: 'Express' });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
