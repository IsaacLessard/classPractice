var db = require('../config/db');

var Hotel = db.Model.extend({
  tableName: 'hotels'
});

module.exports = Hotel;
