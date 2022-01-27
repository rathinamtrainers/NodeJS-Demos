var mysql = require("mysql")

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err) {
    if (err) throw err;
    dbConnection.query("SELECT * from student WHERE FirstName = 'Nitin'", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

