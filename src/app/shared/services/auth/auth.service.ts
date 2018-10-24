import { User } from './../user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<User>{
    return this.http.post<User>('/api/register/', user);
  }

  loginUser(user): Observable<User>{
    return this.http.post<User>('/api/login/', user);
  }
}
