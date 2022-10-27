var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1=Math.abs(Math.random() * 10)
  var num2=Math.abs(Math.random() * 10)
  var num3=Math.abs(Math.random() * 10)

  var fround = Math.fround(num1)
  var random = Math.random(num2)
  var round = Math.round(num3)

  res.render('computation', { title: 'Ambica Peruru computing functions' ,
  num1 : num1,
  num2 : num2,
  num3 : num3,
  fround : fround,
  random : random,
  round : round
});

});

module.exports = router;
