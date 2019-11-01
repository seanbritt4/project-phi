var db = require('./connect.js')

exports.select = function(str, table) {
    var query = 'SELECT '.concat(str, ' from ', table);
    console.log('query:', query);

    // db.query(query);
}

exports.insert = function(query){
    console.log('EXAMPLE: in insert:', query);
}

exports.test = function(msg){
    console.log('queries:', msg);
    return 'hello from database/queries.js'.concat(msg);
}
// exports.createQuery = function(query, content){
// }

