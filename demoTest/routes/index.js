var User = require('../models/user');
/*
 * GET home page.
 */

exports.index = function(req, res){
  User.find({}, function (err,users) {
	  res.render('editUser', { title: 'Express',users:users });
  });
};
exports.login=function(req,res){
    res.render('log',{title:'Login Page'});
} ;
exports.doLogin=function(req,res){
    var user = req.body.user;
    User.find(user,function(err,docs){
        if(!err){
            if(docs!=''){
                console.log(docs);                
                return res.redirect('/');
            } else{
                console.log('用户名或密码不正确');
                return res.redirect('/log');
            }

        }else{
            console.log("Something happend.");
        }
    })
};
exports.reg=function(req,res){
    res.render('reg',{title:'Register Page'});
};
exports.doReg=function(req,res){
    var user = new User({
    	name:req.body['username'],
    	regDate:req.body['regDate'],
    	role:req.body['role'],
    });
    user.save(function (err, user) {
        if(!err) {
            console.log(user);
            console.log('the insert data is'+user);
            res.redirect('/')
        }
    });
    
};
