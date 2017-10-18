var http = require('http');
var port = 8080;

function handleRequest(response, request) {
response.end('It works!! Path Hit:' + request.url);

}

var server = http.createServer(handleRequest);
server.listen(8080, function() {
  console.log("Server is listening on: http://localhost:" + port);

});
