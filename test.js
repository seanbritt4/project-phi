//var modules = require('./phi_modules/database/queries.js')
var modules = require('./phi_modules/database/testQ.js')

var stuff;

var vals = [.1,.5,.5,.3,-5,.3,100,.4];
modules.sendQuery(vals);
//import {qoutput} from './phi_modules/database/testQ.js';
setTimeout(function(){
console.log("printing rows");
console.log(query);
}, 3000);
