var mysql = require("mysql")

// Establish connection to database server
var dbConnection = mysql.createConnection({
    host: "127.0.0.1",   // IP Address of MariaDB/MySQL Server
    user: "rajan",
    password: "rajan123"
});

dbConnection.connect(function(err){
    if (err)
        throw err;

    console.log("Connected!");

    // API Reference: https://mariadb.com/kb/en/create-database/
    dbConnection.query("CREATE OR REPLACE DATABASE students", function (err, result){
        if (err) throw err;
        console.log("Database created");
    })
})