import { Injectable} from '@angular/core';
import { Http,RequestOptions, Headers  } from '@angular/http';
import {notify} from '../PushNotify/notify';
import { Observable ,Subject} from 'rxjs'
import {users} from '../PushNotify/users'
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/observable/range'
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/debounceTime'*/
import 'rxjs'
@Injectable()
export class UserService {
	private _url = "http://192.168.137.1/apiPush/";

	JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
	UrlEncodedoptions=new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }) });
	constructor(private _http: Http) {
	}
	getUsers():Observable<users> {
    let  sub=new Subject();
		 this._http.get(this._url + "GetUsers")
			.map(res => res.json()).subscribe(sub)
      return sub;
	}
	CheckDeviceExists(uid){
		return this._http.post(this._url + "CheckDeviceExists", JSON.stringify(uid), this.JSONoptions)
		.debounceTime(400).map(res => res.json())
	}
	PushNotifySingleDevice(notify:notify){
		return this._http.post(this._url + "SendMessage", JSON.stringify(notify), this.JSONoptions)
		.debounceTime(400)//.map(res=>res.json());
	}

}
