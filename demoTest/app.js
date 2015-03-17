var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , crudRoutes = require('./routes/service/crudUser');   //1
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//all environments
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use('/', routes);
//app.use('/users', users);

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

//设置CRUD的操作路由
app.post('/crud/delUser', crudRoutes.doDeluser);
//app.get('/crud/delUser',crudRoutesMap.doDeluser);
//mongoose
mongoose.connect('mongodb://localhost/test');  //2


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;
var app = express();



