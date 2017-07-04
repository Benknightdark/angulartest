import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs';


@Injectable()
export class TestservicesService {

  constructor(private http: Http) { }
  GetUsers(): Observable<any> {
    return this.http.get("http://172.20.83.80:81/apiAppUser").map(res => res.json());
  }
}
