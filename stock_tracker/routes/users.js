var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  User.fetchAll().then(function(collection){
    res.json(collection.toJSON());
  });
});

router.post('/', function(req, res){
  var data = {
    email: req.body.email,
    password: req.body.password
  }
  var user = new User(data);
  var isValid = user.validateInput(req.body);
  if(!isValid.error){
    user.save().then(function(user){
      res.json(user);
    });
  }else{
    res.end();
  }
});

module.exports = router;
