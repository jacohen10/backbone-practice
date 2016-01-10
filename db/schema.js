var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var RakSchema = new Schema({
  body: String
});

var RakModel = mongoose.model("Rak", RakSchema);
