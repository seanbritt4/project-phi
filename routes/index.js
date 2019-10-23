var express = require('express');
var exphbs = require('express-handlebars');

var router = express.Router();

var aboutHead = 'What We Are';
var aboutBody1 = `Phi is a web application that allows you, the user, to generate a
        playlist based on your mood. This is accomplished through the answering of several questions
        asked through our interface.`
var aboutBody2 = `These questions that are answered return to the AI a set of values that
        are then compared to our database of songs, provided to us through Spotify. Any songs that meet
        the criteria given are placed into a playlist. Simply log in with your Spotify account and get
        started! *Disclosure: We do not save any account information, all login credentials are stored
        through Spotify.*`;
// var hbs = exphbs.create({
//     helpers: {
//         test:function(){
//                 return[
//                     [1,'test1'],
//                     [2,'test2'],
//                     [3,'test3'],
//                     ]}
//     }
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: "Guest",
                        title: "Project PHI" /*,
                        aboutHead:'What We Are' ,
                        aboutBody1: 'Phi is a web application that allows you, the user, to generate a
                                playlist based on your mood. This is accomplished through the answering of several questions
                                asked through our interface.',
                        aboutBody2: `These questions that are answered return to the AI a set of values that
                                are then compared to our database of songs, provided to us through Spotify. Any songs that meet
                                the criteria given are placed into a playlist. Simply log in with your Spotify account and get
                                started! *Disclosure: We do not save any account information, all login credentials are stored
                                through Spotify.*`*/
                        /*about: about,*/
                        /*test: test*/
                        });
  // res.send('test');
});

module.exports = router;
