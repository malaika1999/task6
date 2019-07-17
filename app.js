const express = require("express");
const bodyParser = require("body-parser");
//var morgan = require('morgan');
var passport = require('passport');
//var api = require('./routes/api');
const app = express();
//const secureRoute = require('./routes/secure-routes');
const UserModel = require ('./models/user');


app.use(bodyParser.json());

const dbConfig = require("./config/db.js");
const mongoose = require("mongoose");

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log("Could not connect to the databse", err);
    process.exit();
  });
  mongoose.connection.on('error', error => console.log(error) )
  mongoose.Promise = global.Promise;
  require('./auth/auth');
  app.use(bodyParser.urlencoded({ extended: false }));

  const routes = require('./routes/api');
  const secureRoute = require('./routes/secure-routes');

  app.use('/',routes);
  app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );


require("./routes/student.routes.js")(app);
require("./routes/department.routes.js")(app);
require("./routes/staff.routes.js")(app);

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/


  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
  });

  //app.use(passport.initialize());

  /*app.get('/', function(req, res) {
    res.send('Page under construction.');
  });
  
  app.use('/api', api);*/

app.listen(3000, () => {
  console.log("sever listening on port 3000");
});