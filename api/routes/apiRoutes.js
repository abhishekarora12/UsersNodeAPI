'use strict';
module.exports = function(app) {
  var userapi = require('../controllers/apiController');

  // Routes
  app.route('/users')
    .get(userapi.list_all_users)
    .post(userapi.add_a_user);

  app.route('/user/:id')
    .get(userapi.read_a_user)
    .put(userapi.update_a_user)
    .delete(userapi.delete_a_user);
};
