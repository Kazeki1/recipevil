var mongoose =require('mongoose');
// var connectionString = process.env.MONGODB_URI || 'mongodb://localhost';   //with mongodb on locally
// process.env env is envronmental var
var connectionString = 'MONGODB_URI:mongodb://heroku_qzw7l8gq:hsoi180i17kbs27hqvttbj9cba@ds161497.com:61497/heroku_qzw7l8gq';
//MONGODB_URI:mongodb://heroku_qzw7l8gq:hsoi180i17kbs27hqvttbj9cba@ds161497.mlab.com:61497/heroku_qzw7l8gq


var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;



var recipe = new Schema({
  id: ObjectId,
  title: String,
  directions: String,
  ingredients: Array,
  status: {type: String, default: 'Public'},
  user: String
});

var user = new Schema({
  id: ObjectId,
  name_first: String,
  name_last: String,
  displayName: String,
  photoURL: String,
  email: String,
  password: String,
  gender: {type: String, default: 'Other'}
});

var feedback = new Schema ({
  id: ObjectId,
  rating: Number,
  text: String
});



module.exports = {
  Recipe: mongoose.model('recipe', recipe),
  User: mongoose.model('user', user),
  Feedback: mongoose.model('feedback', feedback)
};
