var fs = require('fs');

//synchronously

// // creat a directory(folder)
// fs.mkdirSync('Rajeev');

// //  removing a directory(folder)
// fs.rmdirSync('Rajeev'); 

//asynchronously

// //create a directory
// fs.mkdir('Rajeev', function(){
//    console.log(`directory is created!`);
// });

//remove a dirctory
fs.rmdir('Rajeev', function(){
    console.log(`directory is delted!!`);
})
