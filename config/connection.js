//Setting up MYSQL Connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password:"" ,//Add MySQL Password
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


//Making connection to Heroku
var herukuConnect;

if(process.env.JAWSDB_URL){
    herukuConnect= mysql.createConnection(process.env.JAWSDB_URL);
} else{
    herukuConnect = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"" ,//Add MySQL Password
    database:"burgers_db"
    });
};

herukuConnect.connect();


//Export connection to ORM

module.exports = connection;