const connection = require("../config/connection.js");



//converting data/values into a string
function dataIntoString (values){
    var arr = [];
    for (var i = 0; i < values; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Converting objects key/values to SQL syntax

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
//SelectAll - Display all the values in the table
    all: function(table, callback){
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if (err) { 
                throw err;
            }
            callback(result);
        });
    },
//Inseting New Burgers
    create: function(table, columns, values, callback){
        var queryInser = "INSERT INTO " + table;
        queryInser += " (";
        queryInser += columns.toString();
        queryInser += ") ";
        queryInser += "VALUES (";
        queryInser += dataIntoString(values.length);
        queryInser += ") ";

        console.log (queryInser);

        connection.query(queryInser, values, function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

//Upating Data - ObjectColVal = {burger_name:?, devoured = ?}
    update: function(table,objColVal,condition, callback){
        var queryUpdt = "UPDATE " + table;
        queryUpdt += " SET  ";
        queryUpdt += objectToSql(objColVal);
        queryUpdt += " WHERE ";
        queryUpdt += condition;

        console.log(queryUpdt);

        connection.query(queryUpdt, function(err, result){
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
