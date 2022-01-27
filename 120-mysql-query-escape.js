var mysql = require("mysql")

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err) {
    if (err) throw err;

    var name = 'Sachin';
    var sql = "SELECT * from student WHERE FirstName = " + mysql.escape(name);
    dbConnection.query(sql, function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

