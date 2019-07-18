var express  = require('express');
var app      = express();
var path     = require('path');
var port     = process.env.PORT || 3000;
var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// router files ===============================================================
var authRoutes   = require('./routes/auth');
var testRoutes  = require('./routes/test');
var configDB     = require('./config/db');
 //app.use(passport.initialize());

app.use(bodyParser.json());
const mongoose = require("mongoose");

mongoose
  .connect(configDB.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log("Could not connect to the databse", err);
    process.exit();
  });
  require('./config/passport')(passport);
  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth)
  app.use(bodyParser.json()); // get information from html forms
  app.use(bodyParser.urlencoded({ extended: true }));
 
  app.use(session({
    secret: 'eminem', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 // mongoose.Promise = global.Promise;

 app.use('/auth', authRoutes);
app.use('/test', testRoutes);

require("./routes/student.routes.js")(app);
require("./routes/department.routes.js")(app);
require("./routes/staff.routes.js")(app);

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
  });

 

app.listen(3000, () => {
  console.log("sever listening on port 3000");
});