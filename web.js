var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var message = fs.readFileSync('index.html','utf8');
console.log(message);

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
