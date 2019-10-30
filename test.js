var modules = require('./phi_modules/module_manager.js')

var w = {};

w.user_values = {
    "tempo":        Math.random(),
    'valence':      Math.random(),
    "danceability": Math.random(),
    "loudness":     Math.random(),
    "energy":       Math.random()
}

// [Math.random(),
//                  Math.random(),
//                  Math.random(),
//                  Math.random(),
//                  Math.random()];

// console.log(w);

modules.main(w)
