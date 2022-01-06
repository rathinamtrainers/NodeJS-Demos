var http = require('http');
var dt = require('./010-myfirstmodule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current Date Time is " + dt.myDateTime() + "<BR>")
    res.write("URL is " + req.url + "<BR>");
    res.end('I like Node.js programming very much! - Rajan<BR>');
}).listen(8080);
