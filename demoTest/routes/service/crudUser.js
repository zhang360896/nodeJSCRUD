var User = require('../../models/user');
/*
 * GET home page.
 */
exports.UpdateUser = function(req, res){
	console.log('update'+req.query.userId+' sucessfully');
	
	User.findById(req.query.userId, function (err,user) {
		console.log('the update id is'+req.query.userId);
		if (!err)  res.render('editUser', { title: 'Edit Page',user:user });
	});
};
exports.doUpdateUser = function(req, res){
	var userId = req.body['userId'];
	var user = new User({
		name:req.body['username'],
		regDate:req.body['regDate'],
		role:req.body['role']
	})
	var update = {$set:{name:user.name, regDate:user.regDate, role:user.role}}
		,options = {};
	console.log('update'+req.body.userId+' sucessfully');
	User.update({_id:userId}, update, options, function(err, user){
		if (!err)console.log('update '+ userId + 'successfully');
		else console.log('update'+userId+'failed');
	});
	res.redirect("/");
//	User.find({}, function (err,users) {
//		  res.render('allUsers', { title: 'Express',users:users });
//	});
};
exports.doDeluser = function(req, res){
	//console.log('delete'+req.body.userId+' sucessfully');
	User.remove({_id:req.body.userId},function(err){ 
		if (!err){
		    console.log('deleted:'+req.body.userId);
	    }
		else {
			console.log('delete failed');
		}
	});
	User.find({}, function (err,users) {
		  res.render('allUsers', { title: 'Express',users:users });
	});
};
