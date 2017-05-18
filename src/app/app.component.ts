import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/observable/range'
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/debounceTime'
import { Router } from '@angular/router';
import { TestservicesService } from "./services/testservices.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url: string;
  showUI: boolean;
  userdata:Observable<any>;
  constructor(private router: Router, private test:TestservicesService) {
    this.router.events.pairwise().subscribe((event: any) => {
      if (event[event.length - 1].url == "/login") {
        this.showUI = false;
      } else {
        this.showUI = true;
      }
    });
  }
  ngOnInit() {
  //this.userdata=this.test.GetUsers();//.subscribe(res=>{console.log(res)})

  //this.test.GetUsers().subscribe(res=>this.userdata=res)

   // this.test.GetUsers().subscribe(res=>this.userdata=res.json())
      this.userdata=  this.test.GetUsers()
  }
}
