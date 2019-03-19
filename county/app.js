const express 	= require('express')
const bodyParser= require('body-parser');
const passport  = require('passport');
const pe        = require('parse-error');
const cors      = require('cors');
const app   		= express();
const CONFIG 		= require('./config/config');
const info      = require('./config/info');
const v1        = require('./routes/v1');
const path      = require('path');
const models    = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

models.sequelize.authenticate().then(() => {
    console.log('Connected to SQL database:', CONFIG.db_name);
})
.catch(err => {
    console.error('Unable to connect to SQL database:',CONFIG.db_name, err);
});
app.use(cors());



info.forEach(function(Value,Key){

app.use('/'+Value.replace(/\./g,'/')+'/v1',require('./'+Value.replace(/\./g,'/')+'/routes/v1'));

})
 
app.use('/', function(req, res){
	res.statusCode = 200;//send the appropriate status code
	res.json({status:"success", message:"project structure", data:{}})
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});
 
