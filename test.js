// var message;
// console.log(message);
var app = require('app.js');

app.get('/public/login.js', function(req, res) {
    var name = req.param('name') || 'Somebody';
    var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
    respondWith += "<h1>Hello " + name + "!</h1>";
    res.status(200);
    res.setHeader('Content-type', 'text/xml');
    return res.send(respondWith);
});
