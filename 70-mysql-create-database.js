var mysql = require("mysql")

// Establish connection to database server
var dbConnection = mysql.createConnection({
    host: "182.75.184.34",
    user: "rajan",
    password: "rajan123"
});

dbConnection.connect(function(err){
    if (err)
        throw err;

    console.log("Connected!");

    dbConnection.query("CREATE DATABASE students", function (err, result){
        if (err) throw err;
        console.log("Database created");
    })
})