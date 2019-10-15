var orm = require("../config/orm");

var burger = [
    orm.selectAll(),
    orm.insertOne("burger4", true)
];
// orm.updateOne();

module.exports = burger;