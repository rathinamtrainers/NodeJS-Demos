var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log('Database Created')

    var dbLMS = db.db("LMS")

    dbLMS.createCollection("students", function(err, res) {
        if (err) throw err;
        console.log("Collection created");

        var student1 = {
            FirstName: "Nitin",
            LastName: "Gupta",
            EmailID: "nitin.gupta@gmail.com"
        };

        dbLMS.collection("students").insertOne(student1, function(err, res){
            if (err) throw err;
            console.log("Data inserted")
        })

        dbLMS.collection("students").find({}).toArray(function(err, result){
            if (err) throw err;
            console.log(result)
        })
    })
})