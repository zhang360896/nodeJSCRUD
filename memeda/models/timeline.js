var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var TimeLineSchema = new Schema({
      memo: String
    , punchDate: String
});
//console.log('mongoose model is '+UserSchema+' '+UserSchema.name);
module.exports = mongoose.model('TimeLine', TimeLineSchema);