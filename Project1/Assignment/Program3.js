const fs = require("fs");

// Function to get current filenames in directory
let filenames = fs.readdirSync('./');

console.log("\nFilenames in directory:");
// // for showing all files 
// filenames.forEach((file) => {
// 	console.log("File:", file);
// });
filenames.forEach((file) => {
    if( file.endsWith(".js")){
        console.log("File:",file)
    }
    else if(file.endsWith(".txt")){
        console.log("File:", file)
    }
    else if(file.endsWith(".json")){
    }
    else{
        console.log("DIR:",file)
    }
});
