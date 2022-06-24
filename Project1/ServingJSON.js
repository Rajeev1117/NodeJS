var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' +req.url); //by this we can access the request object
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj = {
        name : 'Rajeev',
        age : 23,
        job : 'Software Engineer'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listning to port 3000');