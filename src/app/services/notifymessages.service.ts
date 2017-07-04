import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs'
import 'rxjs';
interface Messages {
        ID: string;
        DID: string;
        SenderID?: any;
        title: string;
        body: string;
        SendTime: Date;
    }

@Injectable()
export class NotifymessagesService {
private _url="http://172.20.83.80:81/apiAppMessages"
  constructor(private http:Http) { }
  GetNotifyMessages():Observable<any>{
    return this.http.get(this._url).debounceTime(400).map(res=>res.json()).share();
  }
    GetNotifyMessagesDetail(id:string):Observable<Messages>{
    return this.http.get(this._url+"/"+id).map(res=>(res.json()[0])).share();
}
}
