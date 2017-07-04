import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import 'rxjs';

import { Router } from '@angular/router';
import { TestservicesService } from "./services/testservices.service";
import { Http } from "@angular/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url: string;
  showUI: boolean;
data:Observable<any>
 // userdata:Observable<any>;
  constructor(private router: Router, private test:TestservicesService,private http:Http) {
    this.router.events.pairwise().subscribe((event: any) => {
      if (event[event.length - 1].url == "/login") {
        this.showUI = false;
      } else {
        this.showUI = true;
      }
    });
  }
  ngOnInit() {
// this.data= this.http.get
//       ("http://localhost:8099").map
//       (res=>res.json())

// Observable.interval(300000).subscribe(val => {

//  this.data= this.http.get
//       ("http://localhost:8099").map
//       (res=>res.json())
//       console.log(val)

// });
//output: 0,1,2,3,4,5....

  //this.userdata=this.test.GetUsers();//.subscribe(res=>{console.log(res)})

  //this.test.GetUsers().subscribe(res=>this.userdata=res)

   // this.test.GetUsers().subscribe(res=>this.userdata=res.json())
     // this.userdata=  this.test.GetUsers()
  //  this.test.GetUsers().subscribe(res=>console.log(res))

  }
}
