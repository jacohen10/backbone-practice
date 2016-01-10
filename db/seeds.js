var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/raks');
var RakModel = require("../models/rak");
RakModel.remove({}, function(err){
  console.log(err);
});

var rak1 = new RakModel({body: "Buy something for the person behind you"}).save();
var rak2 = new RakModel({body: "Hold the door or elevator for someone"}).save();
var rak3 = new RakModel({body: "Send someone a note of appreciation"}).save();
