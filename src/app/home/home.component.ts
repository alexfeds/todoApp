import { TestBed } from '@angular/core/testing';
import { Todo } from './../shared/services/objects/todo';
import { TodoService } from './../shared/services/todo/todo.service';
import { Component, OnInit } from '@angular/core';
import { RootData } from '@angular/core/src/view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[];
  todoName;
  isCompleted: boolean;

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos)
    }, error => {
      console.log("Error getting todos")
    })
  }

  createTodo(todo){
    var result;
    var newTodo  = {
      text: this.todoName,
      isCompleted: false
    }

    this.todoService.createTodo(newTodo).subscribe(result =>{
      console.log(result)
      this.todos.push(newTodo)
    }, error =>{
      console.log("Error creating todo")
    })
  }

  deleteTodo(todo){
    var todos = this.todos;

    this.todoService.deleteTodo(todo._id).subscribe(data =>{
    
      if (data){
        console.log(todos)
        for (var i =0; i < todos.length; i++ ){
          if (todos[i]._id == todo._id){
            todos.splice(i, 1)
            console.log(todos)
          }
        }
      }
    }, error =>{
      console.log("Error deleting todo")
    })
  }

  setEditState(todo, state){
    if (state){
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }

updateStatus(todo){
  console.log("should update")
  var _todo = {
    _id: todo._id,
    text: todo.text,
    isCompleted: !todo.isCompleted
  }

  this.todoService.updateTodo(_todo).subscribe(data => {
    todo.isCompleted = !todo.isCompleted;
  })
}


updateTodoText(event, todo){
  if(event.which === 13){
    todo.text = event.target.value;

    var _todo = {
      _id: todo._id,
      text: todo.text,
      isCompleted: todo.isCompleted
    }


    this.todoService.updateTodo(_todo).subscribe(data => {
     this.setEditState(todo, false);
    })
  }

}
}
