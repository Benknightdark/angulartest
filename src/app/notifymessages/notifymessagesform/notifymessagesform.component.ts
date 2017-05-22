import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import {Hero} from './hearo'
@Component({
  selector: 'app-notifymessagesform',
  templateUrl: './notifymessagesform.component.html',
  styleUrls: ['./notifymessagesform.component.css']
})
export class NotifymessagesformComponent implements OnInit {
  id: string;
  title: string
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title =
      this.router.url.indexOf("Detail") > 0 ? "DetailPage"
        : this.router.url.indexOf("Edit") > 0 ? "EditPage"
          : this.router.url.indexOf("Create") > 0 ? "CreatePage"
            : "";

    this.route.params.subscribe(p => { this.id = p["id"]; console.log(this.id); });
  }
  onBack() {
    this.router.navigate(['/NotifyMessages']);
  }
 powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  newHero() {
    this.model = new Hero(42, '', '');
  }

  onSubmit() {this.submitted = true;  }

}
