var fs = require('fs');

//if we didn't use utf8 so it give random chunks
var myReadStream = fs.createReadStream(__dirname + '/Program2/Read.txt', 'utf8');

//create new writeMe file and copy all the junk from ReadMe.txt file and paste in WriteMe file
var myWriteStream = fs.createWriteStream(__dirname + '/Program4/Write.txt');
myReadStream.on('data', function(Text){
    console.log('new file Created:');
    myWriteStream.write(Text);
});

// var myWriteStream = fs.createWriteStream(__dirname + '/Program4/Write.txt');

//     myWriteStream.write("hey ho! let's go");
//     myWriteStream.write("\nNodejs Assignment");

