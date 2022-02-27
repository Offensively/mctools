'use strict';
module.exports = function(app) {
  var mctools = require('../controllers/mctoolsController');

  // mctools Routes
  app.route('/v1/server/:ip/:port/:version')
    .get(mctools.getServer)
};
