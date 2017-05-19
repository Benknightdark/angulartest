import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs'
import 'rxjs';
@Injectable()
export class NotifymessagesService {
private _url="http://192.168.137.1/apiAppMessages"
  constructor(private http:Http) { }

  GetNotifyMessages():Observable<any>{
    return this.http.get(this._url).debounceTime(400).map(res=>res.json());
  }

}
