var db = require('./connect.js')

exports.select = function(str, table) {
    var query = 'SELECT '.concat(str, ' from ', table);
    console.log('query:', query);

    // db.query(query);
}

exports.main = (user_input) => {
    console.log('in db main')
    return user_input
    // var songs_returned = {}
    // return songs_returned
}