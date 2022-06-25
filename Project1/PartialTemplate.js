var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('read');   //read.ejs file from view folder
});
app.get('/contact', function (req, res) {
    res.render('contact');   //contact.ejs file from view folder
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 24, job: 'Software Engineer', hobbies: ['chess', 'sketching', 'travelling'] };
    res.render('profile2', { person: req.params.name, data: data });    //profile2.ejs
});

app.listen(3000);