var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');

var hotelModel = new Hotel();

router.get('/', function (req, res) {
  Hotel.forge({}).fetchAll().then(function (collection) {
    res.json(collection.toJSON())
  });
});

router.post('/', function (req, res) {
  console.log('posting')
  var hotel = new Hotel(req.body);
  hotel.save().then(function (hotelInDB) {
    res.json(hotelInDB);
  });
});

module.exports = router;
