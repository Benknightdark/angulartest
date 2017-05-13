import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './services/Login.service'
 import {LoginModel} from './AuthGuard/LoginModel'
@Component({
  selector: 'login',
  template: '<h1>{{title}}</h1>  <button (click)="login()">Login</button>',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
  title = 'LoginPage';
  constructor(private router:Router,private loginservice:LoginService){}
  OnInit(){

  }
  login() {
    let  data:LoginModel={Username:"ben",Password:"1"};

     console.log(data)
    this.loginservice.login(data)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {

                  confirm("帳密錯誤")
                }
            });
    }
}
