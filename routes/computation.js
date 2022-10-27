var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var fround = Math.fround(num1)
  var random = Math.random(num2)
  var round = Math.round(num3)

  res.render('computation', { title: 'Ambica Peruru computing functions' ,
  fround : fround,
  random : random,
  round : round
});

});

module.exports = router;
