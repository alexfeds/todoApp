const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo');
const User = require('../models/user')

const db = 'mongodb://alexfeds:admin123@ds139193.mlab.com:39193/redhatodos';
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (err) {
    console.error("Error", +err)
  }
})


//register

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)

  user.save((err, registeredUser) =>{
    if (err){
      console.log("Error registring user", err)
    } else {
      res.status(200).send(registeredUser)
    }
  })
})


//login


router.post('/login', (req, res) => {
  let userData = req.body

  User.findOne({email: userData.email}, (err, user) =>{
    if (err){
      console.log("Error login", err)
    } else {
      if (!user){
        res.status(401).send('Invalid email')
      } else if (user.password !== userData.password){
        res.status(401).send("Invalid password")
      } else {
        res.status(200).send(user)
      }
    }
  })
})


//get all

router.get('/todos', (req, res) => {
  console.log("Get request for all todos");
  Todo.find({})
    .exec(function (err, todos) {
      if (err) {
        console.log("Error retrieving todos")
      } else {
        res.json(todos)
      }
    })
});

//get by id

router.get('/todos/:id', (req, res) => {
  console.log("Get request for a single todo");
  Todo.findById(req.params.id)
    .exec(function (err, todo) {
      if (err) {
        console.log("Error retrieving todo")
      } else {
        res.json(todo)
      }
    })
});

//post new one

router.post('/todo', (req, res) => {
  console.log("Post a todo");
  var newTodo = new Todo();
  newTodo.text = req.body.text;
  newTodo.isCompleted = req.body.isCompleted;


  newTodo.save(function (err, insertedTodo) {
    if (err) {
      console.log("Error saving")
    } else {
      res.json(insertedTodo)
    }
  })
});

//update todo by id

router.put('/todo/:id', (req, res)   =>  {
  console.log("Updateed a todo");
  Todo.findByIdAndUpdate(req.params.id,
     {
      $set: { text: req.body.text, isCompleted: req.body.isCompleted }
     },
     
     {
      new: true
     },
    (err, updatedTodo) => {
      if (err){
        res.send("Error updating todo")
      } else{
        res.json(updatedTodo)
      }
    }
  )
});

//delete a todo

router.delete('/todo/:id', (req, res)   =>  {
  console.log("DEleted a todo");
  Todo.findByIdAndRemove(req.params.id,
   
    (err, deletedTodo) => {
      if (err){
        res.send("Error deleting todo")
      } else{
        res.json(deletedTodo)
      }
    }
  )
});






module.exports = router;
