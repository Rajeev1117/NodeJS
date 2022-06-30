var fs = require('fs');

// function countOcuurences(string, word) {
//     return string.split(word).length - 1;
// }
// var text= 'john john john john john'
// console.log(countOcuurences(text, 'john'))

var fileName = './Program5/Read.txt'
var wordToFind = 'john';


fs.readFile(fileName, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var aWordsText = contentFile.toLowerCase().split(' ');
    var aFilteredWords = aWordsText.filter(function(word){
        return word.includes(wordToFind);
    })
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});
