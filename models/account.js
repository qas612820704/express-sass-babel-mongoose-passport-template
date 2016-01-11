var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
  username: String,
  password: String,
  profile: {
    type: Schema.Types.ObjectId, ref:'Profile'
  },
});

Account.plugin(passportLocalMongoose);

var Profile = new Schema({
  name: String,
  nick: String,
  school: {
    type: Schema.Types.ObjectId, ref:'School'
  },
  grade: Number,

  signs: [
    {type: Schema.Types.ObjectId, ref: 'Sign'}
  ],

});

var Sign = new Schema({
  content: String,
})

var School = new Schema({
  schoolName: String,
});

module.exports = {
  Account: mongoose.model('Account', Account),
  Profile: mongoose.model('Profile', Profile),
  Sign   : mongoose.model('Sign', Sign),
  School : mongoose.model('School', School),
};
