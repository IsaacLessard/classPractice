var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  
})

router.get('/sign-up', function (req, res, next){
  res.render('register')
})

module.exports = router;
