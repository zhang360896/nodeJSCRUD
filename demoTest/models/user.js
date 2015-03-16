var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
      name: String
    , password: String
});
console.log('mongoose model is '+UserSchema+' '+UserSchema.name);
module.exports = mongoose.model('User', UserSchema);