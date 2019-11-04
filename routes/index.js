var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('in get index')
  res.render('index', { name: "Guest", title: "Project PHI" });
  // next();
});

module.exports = router;
