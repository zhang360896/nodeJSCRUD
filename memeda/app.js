var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , crudRoutes = require('./routes/service/crudUser')
  , punchRoutes = require('./routes/service/controlTimeline');   //1
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
//增加 
app.post('/users', crudRoutes.doReg);
//修改
app.put('/users', crudRoutes.doUpdateUser);
//删除
//app.del('/users', crudRoutes.doDeluser);

//app.get('/users/updateUser', crudRoutes.UpdateUser);
//app.post('/users/updateUser', crudRoutes.doUpdateUser);
app.post('/users/delUser',crudRoutes.doDeluser);
app.post('/punch', punchRoutes.doAddTimePoint);
app.get('/punch', punchRoutes.getTimePoint);
app.get('/punchReset',punchRoutes.reset);
//mongoose
//mongoose.connect('mongodb://zhangyingxi:987654@ds063140.mongolab.com:63140/zyxmongolab');  //2
mongoose.connect('mongodb://localhost:27017');
http.createServer(app).listen(app.get('port'));
console.log('Express server is listening on port ' + app.get('port'));
module.exports = app;
var app = express();



