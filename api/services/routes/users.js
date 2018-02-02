'use strict';
module.exports = function(app) {
    var users = require('../controllers/users');

    // todoList Routes
    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_a_user);

    app.route('/users/:usersId')
        .get(users.read_a_user)
        .put(users.update_a_user)
        .delete(users.delete_a_user);
};