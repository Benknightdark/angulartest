import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 import { LoginModel } from '../AuthGuard/LoginModel'
@Injectable()
export class LoginService {
  public token: string;
  private _url = "http://192.168.137.1:88";
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8'}) });

 headers =new Headers();

  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(data: LoginModel): Observable<boolean> {

    return this.http.post("http://192.168.137.1:88/api/token", JSON.stringify(data), this.JSONoptions)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          console.log(this.token)
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: data["Username"], token: token }));

          // return true to indicate successful login
          return true;
        } else {
          console.log('false')
          // return false to indicate failed login
          return false;
        }
      });
  }
  ///測試jwt登入
  TestService(){
  this.headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentUser")).token);
 return this.http.get("http://192.168.137.1:88/api/token",{"headers": this.headers}).map(res=>res.json());

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
