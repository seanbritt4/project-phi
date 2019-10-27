var modules = require('./phi_modules/module_manager.js')

var w = {};

w.user_values = [[Math.random(), 'tempo'],
                 [Math.random(), 'valence'],
                 [Math.random(), 'danceability'],
                 [Math.random(), 'loudness:'],
                 [Math.random(), 'energy']];

// console.log(w);

modules.main(w)
