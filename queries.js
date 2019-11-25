var connection = require('./connect.js')

exports.select = function(query) {
    console.log('EXAMPLE: in select', query);
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
