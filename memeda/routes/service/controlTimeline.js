var TimeLine = require('../../models/timeline');
var url = require('url');
exports.reset=function(req,res){
    TimeLine.remove({},function(err){
        if (err){
            console.log(err);
        }
    })
    res.end();
    //res.render('reg',{title:'Register Page'});
};
exports.getTimePoint=function(req,res){
    var resData = [];
    TimeLine.find({},function(err, timeLines){
        for (var i = 0; i < timeLines.length; i ++){
            console.log('the timeline is'+timeLines[i].punchDate);
            var json = {};
            json.punchDate = timeLines[i].punchDate;
            json.memo = timeLines[i].memo;
            resData.push(json);
        }
        res.json(resData);
        res.end();
    });
	//console.log('the data are '+req.body.newUser);
    //res.render('reg',{title:'Register Page'});
};
exports.doAddTimePoint=function(req,res){
	console.log('the data are '+req.body['name']);
	console.log("reg put got data");
  
	var timeLine = new TimeLine({
        memo:req.body['memo'],
        punchDate:req.body['punchDate']
    });
    console.log('the data are '+timeLine);
    timeLine.save(function (err, timeLine) {
        if(!err) {
            //console.log(user);
            console.log('the insert data is'+timeLine.punchDate);
            res.redirect('/');
        }
    });
    
};
