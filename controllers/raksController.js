var express = require("express");
var router = express.Router();
var RakModel = require("../models/rak");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/raks", function(req, res){
  RakModel.find({}).then(function(raks){
    res.json(raks);
  });
});

// router.get("/raks/:id", function(req, res){
//   RakModel.findByID(req.params.id).then(function(rak){
//     res.json(rak);
//   });
// });


module.exports = router;
