var mysql = require('mysql')

var dbConnection = mysql.createConnection({
    host: "182.75.184.34",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB server");

    // Create table student
    var sql = "CREATE TABLE student (name VARCHAR(255), email VARCHAR(255), mobile1 VARCHAR(100))";
    dbConnection.query(sql, function (err, result){
        if (err) throw err;

        console.log("Student table created");
    })
})

