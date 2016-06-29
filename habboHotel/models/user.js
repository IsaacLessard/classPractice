var db = require('../config/db');

var User = db.Model.extend({
  tableName: 'users'
});

module.exports = User;
