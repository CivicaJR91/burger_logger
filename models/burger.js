var orm = require ("../config/orm.js");

var burger = {

    //SELECT ALL

    all: function(callback){
      orm.all("burgers", function(res){
          callback(res);
      });  
    },

    // ADDING INFORMATION
    create: function (columns, values, callback){
        orm.create("burgers", columns, values, function(res){
            callback(res);
        });
    },
    // Upating Data - ObjectColVal = {burger_name:?, devoured = ?}
    update: function(objColVal,condition, callback){
        orm.update("burgers", objColVal, condition, function(res){
            callback(res);
        });
    }
};

//Exporting the database for the controller

module.exports = burger;



