//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var app = express();
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//app.listen(1333);
//console.log('the Server is running!');
//module.exports = app;
//
//
///数据库处理
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');   //1
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/log',routes.login);
app.post('/log',routes.doLogin);
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);


//mongoose
mongoose.connect('mongodb://localhost/test_db');  //2


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
