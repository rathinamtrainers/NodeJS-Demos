var mysql = require("mysql")

var dbConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err){
    if (err) throw err;
    console.log("Connected to Student database");

    // API Reference: https://mariadb.com/kb/en/insert/
    var sql = "INSERT INTO student (FirstName, LastName, EmailID, MobileNumber, Country, createdDate)"
            + " VALUES ('Ajay', 'Sinha', 'ajay.sinha@gmail.com', '1234567890', 'India', '2022-01-20')";
    dbConnection.query(sql, function(err, result){
        if (err) throw err;
        console.log("Record inserted")
    })
})