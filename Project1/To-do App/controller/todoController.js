var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb+srv://Rajeev:Password@cluster0.rrevs.mongodb.net/test')

//create a schema this is like blueprint
var todoSchema = new mongoose.Schema({
    item: String
});
//create model
var Todo = mongoose.model('Todo', todoSchema);
// //add item
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// });

// //store the objects
// var data = [{item:'Rajeev'},{item:'Aakash'},{item:'Sunil'},{item:'Akshay'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos : data});
        });
        // res.render('todo', {todos : data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //get data from the view and add it on mongodb
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        // data.push(req.body);
        // res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        // delete the data item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        });
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, "-") !==req.params.item;
        // });
        // res.json(data);
    });
};