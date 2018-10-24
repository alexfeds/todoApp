import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth/auth.service';

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
      res => console.log(res),
      err => console.log(err)
    )
  }
}
