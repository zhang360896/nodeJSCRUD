var User = require('../../models/user');
/*
 * GET home page.
 */

exports.doDeluser = function(req, res){
	console.log('delete'+req.body.userId+' sucessfully');
	User.remove({_id:req.body.userId},function(err,docs){  
	    console.log('delete docs:'+docs);  
	});
//  User.remove({"id":userId}, function (err,users) {
//	  console.log('deleted sucessfully');
	res.render('allUsers', { title: 'Express',users:users });
	res.redirect('/');
	//  });
};
exports.doReg=function(req,res){
    var user = new User({
    	name:req.body['username'],
    	regDate:req.body['regDate'],
    	role:req.body['role']
    });
    user.save(function (err, user) {
        if(!err) {
            console.log(user);
            console.log('the insert data is'+user);
            res.redirect('/')
        }
    });
    
};
