const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

//get the list of users from the db
router.get('/users', function(req, res){
    res.send({type: 'GET'});
});

//add a new user to the db
router.post('/users', function(req, res){
    //var user = new User(req.body);
    //user.save();
    User.create(req.body)
    .then(function(user){
        res.send(user);
    });
});

//update a user in the db
router.put('/users/:id', function(req, res){
    res.send({type: 'PUT'});
});

//delete a user from the db
router.delete('/users/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
