var url = require("url")
var addr = "https://www.google.com/search?q=nodejs+docs+url+module&oq=nodejs&aqs=edge.0.69i59j69i57j69i60l4j0i67j69i60j0i67.2302j0j1&sourceid=chrome&ie=UTF-8"

// Parse the URL address
var q = url.parse(addr, true)

console.log("Host: " + q.host)
console.log("Pathname: " + q.pathname)

console.log("Search string: " + q.search)

var query_data = q.query;
console.log(query_data)
console.log("Search Query String: " + query_data.q)


