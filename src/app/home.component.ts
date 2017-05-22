import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
  title = 'app works! ';
}
