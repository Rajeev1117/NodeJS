var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

var port = 8080;
// var db = 'mongodb://localhost/example'
var db = 'mongodb+srv://Rajeev:Rajeev%4012@cluster0.rrevs.mongodb.net/example'

mongoose.connect(db);

app.get('/',function(req,res){
    res.send('happy to be here');
});

app.get('/books', function(req, res){
    console.log('getting all books');
    Book.find({})
    .exec(function(err, books){
        if(err){
            res.send('error has occured');
        } else{
            console.log(books);
            res.json(books);
        }
    })
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
  });