var mysql = require('mysql')

var dbConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "rajan",
    password: "rajan123",
    database: "students"
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB server");

    // Create table student (API Reference: https://mariadb.com/kb/en/create-table/)
    var sql = `CREATE OR REPLACE TABLE student (
        StudentID    INT            PRIMARY KEY AUTO_INCREMENT,
        FirstName    VARCHAR(50)    NOT NULL,
        LastName     VARCHAR(50),
        EmailID      VARCHAR(50)    NOT NULL UNIQUE,
        MobileNumber VARCHAR(10)    NOT NULL,
        Country       VARCHAR(50)   NOT NULL,
        createdDate   DATE          NOT NULL,
        City          VARCHAR(50),
        Company       VARCHAR(50),
        Description   VARCHAR(200)  
        )`;
    dbConnection.query(sql, function (err, result){
        if (err) throw err;

        console.log("Student table created");
    })
})

