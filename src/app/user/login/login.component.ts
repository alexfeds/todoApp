import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {

  }


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData)

    this.authService.registerUser(this.loginUserData).subscribe(
      result => { console.log(result) }, (error: HttpErrorResponse) => {
        console.log(error)
      }


    )
  }
}
