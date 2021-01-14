const connection = require("../config/connection.js");

//Helper fucntion for SQL Syntax

//converting data/values into a string
function dataIntoString (values){
    var arr = [];
    for (var i = 0; i < values; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Helper fucntion to convert objects key/values to SQL syntax

function objectToSql (object){
    var arr =[];
    for (var key in object){
        var value = object[key];

        if (Object.hasOwnProperty.call(object,key)){
            if (typeof value === "string" && value.indexOf(" ") >=0){
                value = " " + value + " ";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//SQL Methods SelectAll, InsertOne, UpdateOne


var orm = {
//SelectAll
    all: function(table, callback){
        var query = "SELECT * FROM" + table + ";";
        connection.query(query, function(err, result){
            if (err) { 
                throw err;
            }
            callback(result);
        });
    },
//Inseting Data
    create: function(table, columns, values, callback){
        var query = "INSERT INTO" + table;
        query += " (";
        query += columns.toString();
        query += " )";
        query += "VALUES (";
        query += dataIntoString(values.length);
        query += ") ";

        console.log (query);

        connection.query(query, values, function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

//Upating Data - ObjectColVal = {burger_name:?, devoured = ?}
    update: function(table,objColVal,condition, callback){
        var query = "UPDATE " + table;
        query += "SET ";
        query += objectToSql(objColVal);
        query += " WHERE ";
        query += condition;

        console.log(query);

        connection.query(query, function(err, result){
            if (err) 
            {
            throw err;
        }
        callback(result)
        });
    }
}

// Export ORM object for the model burger.js

module.exports = orm;
