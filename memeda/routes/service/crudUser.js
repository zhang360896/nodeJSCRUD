var User = require('../../models/user');
var url = require('url');
exports.reg=function(req,res){
	//console.log('the data are '+req.body.newUser);
    //res.render('reg',{title:'Register Page'});
};
exports.doReg=function(req,res){
	console.log('the data are '+req.body['name']);
	console.log("reg put got data");
  
	var user = new User({
    	name:req.body['name'],
    	regDate:req.body['regDate'],
    	role:req.body['role'],
    });
    console.log('the data are '+user);
    user.save(function (err, user) {
        if(!err) {
            //console.log(user);
            //console.log('the insert data is'+user);
            res.redirect('/')
        }
    });
    
};

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
	var judID = req.body['id'];
    console.log("the ID is:"+judID);
    
	var user = new User({
		name:req.body['name'],
		regDate:req.body['regDate'],
		role:req.body['role']
	})
	if (typeof(judID) != "undefined"){
		user._id = judID;
	}
    console.log('the data are '+user);
	var update = {$set:{name:user.name, regDate:user.regDate}}
		,options = {};
	console.log('update'+user._id+' sucessfully');
	User.update({_id:user._id},update,options,function(err,users){
		if(!err)console.log('update '+ user._id + 'successfully');
	});
	res.redirect("/");
    //res.render('editUser', { title: 'Express',users:users });
	/*User.find({}, function (err,users) {
		  res.render('editUser', { title: 'Express',users:users });
	});*/
};
exports.doDeluser = function(req, res){
	//console.log('backbone:'+req.body.title);
	var test = url.parse(req.url, true).query;
	console.log("the param is:"+req.body.name);
	var judID = req.body['id'];
    console.log("the ID is:"+judID);
	if (typeof(judID) != "undefined"){
		User.remove({_id:judID},function(err){ 
			if (!err){
			    console.log('deleted:'+judID);
		    }
			else {
				console.log('delete failed');
			}
		});
		/*User.find({}, function (err,users) {
			  res.render('editUser', { title: 'Express',users:users });
		});*/
	}
};
