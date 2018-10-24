const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    isCompleted: Boolean
});


module.exports = mongoose.model('todo', todoSchema, 'todos')