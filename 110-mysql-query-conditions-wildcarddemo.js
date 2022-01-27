var mysql = require("mysql")

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err) {
    if (err) throw err;
    dbConnection.query("SELECT * FROM student WHERE MobileNumber LIKE '1%';\n", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

