//var modules = require('./phi_modules/database/queries.js')
var modules = require('./phi_modules/database/testQ.js')

var stuff;

var vals = [.1,.5,.5,.5,.3,-5,.3,100,.4];
stuff = modules.sendQuery(vals);

setTimeout(function(){
console.log("printing rows");
console.log(stuff);
}, 3000);
