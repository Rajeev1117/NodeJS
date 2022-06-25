var express = require('express');
var bodyParser = require ('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); //express the server static file

app.get('/', function (req, res) {
    res.render('index');   //read.ejs file from view folder
});

app.get('/contact', function (req, res) {
    res.render('contact1', {qs: req.query});   //contact1.ejs file from view folder
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.query}); 
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 24, job: 'Software Engineer', hobbies: ['chess', 'sketching', 'travelling'] };
    res.render('profile3', { person: req.params.name, data: data });    //profile2.ejs
});

app.listen(3000);