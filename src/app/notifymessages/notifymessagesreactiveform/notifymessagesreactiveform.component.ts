import {Messages} from '../notifymessagesform/Messages';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router, Params, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'
import {NotifymessagesService} from '../../services/notifymessages.service';

@Component({
  selector: 'app-notifymessagesreactiveform',
  templateUrl: './notifymessagesreactiveform.component.html',
  styleUrls: ['./notifymessagesreactiveform.component.css']
})
export class NotifymessagesreactiveformComponent implements OnInit {
 id: string;
  title: string
  DetailData:Observable<Messages>
  DetailDataForm:FormGroup;
  constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute,private mservice:NotifymessagesService) {

   }

  ngOnInit() {
    this.title =
      this.router.url.indexOf("Detail") > 0 ? "DetailPage"
        : this.router.url.indexOf("Edit") > 0 ? "EditPage"
          : this.router.url.indexOf("Create") > 0 ? "CreatePage"
            : "";

    this.route.params.subscribe(p => { this.id = p["id"]; console.log(this.id); });
    this.mservice.GetNotifyMessagesDetail(this.id).subscribe(res=>this.DetailData=res[0])
     this.DetailDataForm=this.fb.group({
      title: '',
      body: '',
      SendTime: ''
    });

  }
  onBack() {
    this.router.navigate(['/NotifyMessages']);
  }

  onSubmit() {  }

}
