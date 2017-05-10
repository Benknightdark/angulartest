import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/observable/range'
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/debounceTime'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url:string;
  showUI:boolean
  constructor(private router: Router) {
       this.router.events.pairwise().subscribe((event:any) => {
           // console.log(event);
           // console.log(event.length)
             //console.log (event[event.length-1].url)
          if(event[event.length-1].url=="/login"){
            this.showUI=false;
          }else{
            this.showUI=true;
          }
          
        });

        
    };

}
