var express = require('express');
var router = express.Router();

// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
//
// var $ = jQuery = require('jquery')(window);
//
// $.ajaxSetup({
//     url: "index.hbs"
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "Guest", title: 'Project PHI' });
  // res.send('test');
});

module.exports = router;
