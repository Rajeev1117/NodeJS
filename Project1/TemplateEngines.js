var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/ReadableStream/Read.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/views/Contact.html');
});

//go to views folder views/profile.ejs
app.get('/profile/:name', function(req, res){
    var data = {age: 23, job:'Software Engineer'}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('Server Created Successfully');