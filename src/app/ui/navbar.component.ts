import {Component} from '@angular/core'
import {LoginService} from '../services/Login.service'
import { Router } from '@angular/router';
@Component({
    selector:"navbar",
    templateUrl:"navbar.component.html",
})
export class NavComponent{
 constructor(private LoginService:LoginService,private router:Router){}
 Logout(){

     this.LoginService.logout();
     this.router.navigate(['/login']);
 }
}