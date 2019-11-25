var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  // console.log(req.url);
  console.log('in inputRouter');
  // console.log('req:', req);
  res.render('/input', {name: 'input.js'});
  // res.render(__dirname + '../views/input')
});

module.exports = router;
