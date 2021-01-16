var express = require("express");
var router = express.Router();
var burger = require ("../models/burger.js");

//Create routes - connecting the routes to the models burger.js


// Showing all data  - allData is hadlebar objects devored list
router.get("/", function(req, res){
    burger.all(function(data){
        var allData = {
            burgers: data
        };
        console.log(allData);
        res.render("index", allData);
    });
});

//Creating new inputs and rendering the data
router.post("/api/burgers", function(req, res){
    burger.create (
        [//table properties
        "burger_name", 
        "devoured"
    ],
    [
        req.body.burger_name,
        req.body.devoured
    ], function(result){
        res.json({
            id:result.id  //sending back an ID of the new data
        }); 
    });
});

//Updating Data

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log(condition);
    burger.update({
        devoured: req.body.devoured
    },
    condition, function (result){
        if (result.change == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

//Expoting routes for server.js

module.exports = router;
