var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "Guest", title: 'Project PHI' });
  // res.send('test');
});

// router.param()

module.exports = router;
