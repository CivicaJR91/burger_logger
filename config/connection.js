//Setting up MYSQL Connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password:"MYSQL01233" ,//Add MySQL Password
    database:"burgers_db"
});

//Making Connection
connection.connect(function(err){
    if (err){
        console.error("Error" + err.stack);
        return
    }
    console.log(connection.threadId);
})

//Export connection to ORM

module.exports = connection;