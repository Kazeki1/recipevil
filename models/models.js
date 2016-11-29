var mongoose =require('mongoose');
// var connectionString = process.env.MONGODB_URI || 'mongodb://localhost';   //with mongodb on locally
// process.env env is envronmental var
//MONGODB_URI => mongodb://heroku_qzw7l8gq:hsoi180i17kbs27hqvttbj9cba@ds161497.com:61497/heroku_qzw7l8gq';
//MONGODB_URI:mongodb://heroku_qzw7l8gq:hsoi180i17kbs27hqvttbj9cba@ds161497.mlab.com:61497/heroku_qzw7l8gq
// 'MONGODB_URI => mongodb://heroku_qzw7l8gq:hsoi180i17kbs27hqvttbj9cba@ds161497.mlab.com:61497/heroku_qzw7l8gq';
/*
 The following is the standard URI connection scheme:
 mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
 The components of this string are:
 
 mongodb://	A required prefix to identify that this is a string in the standard connection format.
 username:password@	Optional. If specified, the client will attempt to log in to the specific database using these credentials after connecting to the mongod instance.
 host1	Required. It identifies a server address to connect to. It identifies either a hostname, IP address, or UNIX domain socket.
 :port1	Optional. The default value is :27017 if not specified.
 hostX	Optional. You can specify as many hosts as necessary. You would specify multiple hosts, for example, for connections to replica sets.
 :portX	Optional. The default value is :27017 if not specified.
 /database	Optional. The name of the database to authenticate if the connection string includes authentication credentials in the form of username:password@. If /database is not specified and the connection string includes credentials, the driver will authenticate to the admin database.
 ?options
 Connection specific options. See Connection String Options for a full description of these options.
 
 If the connection string does not specify a database/ you must specify a slash (i.e. /) between the last hostN and the question mark that begins the string of options.
 */

//---http://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/heroku_qzw7l8gq';
// Use connect method to connect to the Server
MongoClient.connect(
  url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
  }
);
//---------------


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
