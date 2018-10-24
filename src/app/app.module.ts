
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//services
import { TodoService } from './shared/services/todo/todo.service';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './../app/user/register/register.component';
import { LoginComponent } from './../app/user/login/login.component';
import { AuthService } from './shared/services/auth/auth.service';

// import { UserService } from './shared/services/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
