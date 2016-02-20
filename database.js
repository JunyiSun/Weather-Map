var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	ip: String,
	lon: String,
  lat: String

});


var User = mongoose.model('User',UserSchema);
module.exports = User;
