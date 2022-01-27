// Install upper-case npm package before running this program.

var uc = require("upper-case")
var http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Welcome to Rathinam Trainers<BR>")
    res.write(uc.upperCase("Welcome to Rathinam Trainers<BR>"))
    res.end()
}).listen(8080)

