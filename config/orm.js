var connection = require("./connection");


var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers;", function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    insertOne: function (name, cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false);", [name], function (err, result) {
            if (err) throw err;

            cb(result);
        })
    }
    // updateOne: function(value, condition, cb) {
    //     connection.query("UPDATE burgers SET 'devoured'=? WHERE ??", [value, condition], function(err, result) {
    //         if (err) throw err;

    //         cb(result);
    //     })
    // }
}

module.exports = orm;