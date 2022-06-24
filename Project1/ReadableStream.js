var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/ReadableStream/ReadMe.txt', 'utf8'); 
//if we didn't use utf8 so it give random chunks

myReadStream.on('data', function(chunk){
    console.log('new chunk Received:');
    console.log(chunk);
});