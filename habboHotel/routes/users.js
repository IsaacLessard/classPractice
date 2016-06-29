var express = require('express');
var router = express.Router();
var User = require('../models/user');

var userModel = new User();

router.get('/', function (req, res) {
  User.forge({}).fetchAll().then(function (collection) {
    res.json(collection.toJSON())
  });
});

router.post('/', function (req, res) {
  console.log('posting')
  var newUser = {}
  newUser.email = req.body.email
  newUser.password = req.body.password
  var user = new User(newUser);
  user.save().then(function (userInDB) {
    res.json(userInDB);
  });
});

module.exports = router;
