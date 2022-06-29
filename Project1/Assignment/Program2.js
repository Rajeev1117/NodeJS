var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/Program2/Read.txt', 'utf8'); 
//if we didn't use utf8 so it give random chunks

myReadStream.on('data', function(ReadFile){
    console.log('new content Received:');
    console.log(ReadFile);
});