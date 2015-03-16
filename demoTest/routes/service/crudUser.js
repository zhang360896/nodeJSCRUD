var User = require('../../models/user');
/*
 * GET home page.
 */

exports.doDeluser = function(req, res, userId){
	console.log('delete'+userId+' sucessfully');
//  User.remove({"id":userId}, function (err,users) {
//	  console.log('deleted sucessfully');
//	  res.render('allUsers', { title: 'Express',users:users });
//  });
};
exports.doReg=function(req,res){
    var user = new User({
    	name:req.body['username'],
    	password:req.body['password']
    });
    user.save(function (err, user) {
        if(!err) {
            console.log(user);
            console.log('the insert data is'+user);
            res.redirect('/')
        }
    });
    
};
