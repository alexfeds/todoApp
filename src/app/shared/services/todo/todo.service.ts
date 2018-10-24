import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './../objects/todo';
import { HttpClientModule } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _allTodosURL = "/api/todos";
  private _TodosURL = "/api/todo";

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get<Todo[]>(this._allTodosURL);
  }

  createTodo(request: Todo){

    return this.http.post(this. _TodosURL, request);

  }

  updateTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>('/api/todo/' + todo._id, todo);
  }

  deleteTodo(id): Observable<Todo>{
    return this.http.delete<Todo>('/api/todo/' + id);
  }
}
