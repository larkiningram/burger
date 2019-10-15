var orm = require("../config/orm");

var burgers = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(name, cb) {
      orm.insertOne(name, function(res) {
        cb(res);
      });
    }
    // updateOne: function(value, condition, cb) {
    //   orm.update(value, condition, function(res) {
    //     cb(res);
    //   });
    // }
  };

module.exports = burgers;