var connection = require("./connection");


var orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers;", function(err, result) {
            if (err) throw err;

            return result;
        })
    },
    insertOne: function(name, eaten) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);", [name, eaten], function(err, result) {
            if (err) throw err;

            return result;
        })
    }
    // updateOne: function() {
    //     connection.query("UPDATE", function(err, result) {
    //         if (err) throw err;

    //         return result;
    //     })
    // }
}

module.exports = orm;