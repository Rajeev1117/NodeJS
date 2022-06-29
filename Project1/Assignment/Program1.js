var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' +req.url); //by this we can access the request object
    res.writeHead(200,{'Content-Type': 'text/plain'});   //200 is status code
    res.end("success i'm listening from port:3000");
});

server.listen(3000, '127.0.0.1');
console.log("success i'm listening from port:3000");