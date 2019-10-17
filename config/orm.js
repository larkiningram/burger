var connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


// var orm = {
//     selectAll: function (cb) {
//         connection.query("SELECT * FROM burgers;", function (err, result) {
//             if (err) throw err;

//             cb(result);
//         })
//     },
//     insertOne: function (vals, cb) {
//         var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);"
//         connection.query(queryString, vals, function (err, result) {
//             if (err) throw err;

//             cb(result);
//         })
//     },
//     updateOne: function (value, condition, cb) {
//         connection.query("UPDATE burgers SET 'devoured'=? WHERE id=?", [value, condition], function (err, result) {
//             if (err) throw err;

//             cb(result);
//         })
//     }
// }

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    updateOne: function (table, objColVals, condition, cb) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    }
}
module.exports = orm;