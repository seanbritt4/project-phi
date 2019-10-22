var express = require('express');
var router = express.Router();
// var $ = require('jQuery');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

$.ajaxSetup({
    url: "index.hbs"
});
console.log('here');
/* old test code... */
// require("jsdom").env("", function(err, window){
//     if(err){
//         console.log(err);
//         return;
//     }
//     var $ = require("jQuery")(window);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "Guest", title: 'Project PHI' });
  // res.send('test');
});


// $( ".trigger" ).click(function() {
//   $( ".result" ).load( "ajax/test.html" );
// });
//
// $(document).ajaxStart(function() {
//   $(".log").text("Triggered ajaxStart handler.");
// });

// router.param()

module.exports = router;
