var express = require("express");

var router = express.Router();

var burger = require("../models/burger");


// router.get("/", function (req, res) {
//     burger.selectAll(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });


// router.get("/api/burgers", function (req, res) {
//     burger.selectAll(function (data) {

//         res.json(data);
//     });
// });

// router.post("/api/burgers", function (req, res) {
//     burger.insertOne(req.body.burger, function (result) {
//         console.log(res.body.burger);
//         res.json({id: result.insertId});
//     });
// });

// router.patch("/api/burgers/:id", function(req, res) {
//     // var condition = req.params.id;

//     cat.updateOne(req.body.devoured, req.params.id, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });

//   });

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ],function (result) {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body)
    burger.updateOne({
        devoured: req.body.devoured
      }, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });

  });

module.exports = router;