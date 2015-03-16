var express = require('express');
var router = express.Router();
var jade = require('jade');

/* GET users listing. */

router.get('/', function(req, res, next) {
	//res.send('respond with a resource');
	console.log('in user');
	//var fn = jade.compile('div #{course}',{});
	//var html = jade.renderFile('./views/error.jade', {course: 'jade renderFile', pretty: true});
	//res.send(html);
	//res.end();
});
module.exports = router;
