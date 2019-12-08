//var modules = require('./phi_modules/database/queries.js')
var modules = require('./phi_modules/database/testQ.js')

var stuff =[Object()];

var vals = [.1,.5,.5,-5,100,.4];
stuff = modules.sendQuery(vals, '`');
//import {qoutput} from './phi_modules/database/testQ.js';
setTimeout(function(){
console.log("printing rows");
console.log(query[2].keyy);
}, 9000);
