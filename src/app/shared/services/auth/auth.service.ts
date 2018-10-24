import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>('/api/register/', user);
  }

  loginUser(user){
    return this.http.post<any>('/api/login/', user);
  }
}
