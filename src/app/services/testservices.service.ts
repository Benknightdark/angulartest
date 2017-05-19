import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import 'rxjs';
=======
//import { Observable } from 'rxjs';
//import 'rxjs';
>>>>>>> ec1d9623ba5f74cf541cbce1e9bef995d54c4c5c
@Injectable()
export class TestservicesService {

  constructor(private http: Http) { }
<<<<<<< HEAD
  GetUsers():Observable<any> {

    //return this.http.get("http://192.168.137.1/apiAppUser").map(res=>res.json());

    return this.http.get("http://192.168.137.1/apiAppUser").map(res=>res.json());
   // return this.http.get("http://192.168.137.1/apiAppUser")

=======
  GetUsers()/*:Observable<any>*/ {

    //return this.http.get("http://192.168.137.1/apiAppUser").map(res=>res.json());
    //return this.http.get("http://192.168.137.1/apiAppUser").map(res=>res.json());
    return this.http.get("http://192.168.137.1/apiAppUser")
>>>>>>> ec1d9623ba5f74cf541cbce1e9bef995d54c4c5c
  }

}
