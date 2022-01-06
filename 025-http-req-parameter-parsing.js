var http = require('http');
var dt = require('./010-myfirstmodule')
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current Date Time is " + dt.myDateTime() + "<BR>")
    res.write("URL is " + req.url + "<BR>");

    var q = url.parse(req.url, true).query;
    res.write(q.name + " - Welcome to Rathinam Trainers <BR>")
    res.write("You are from " + q.location + "<BR>");
    res.end('I like Node.js programming very much! - Rajan<BR>');
}).listen(8080);
