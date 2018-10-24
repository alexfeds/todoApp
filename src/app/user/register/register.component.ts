import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {

  }

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerUserData)

    this.authService.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )}

    

}
