import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {Observable} from 'rxjs'
import 'rxjs';
import { NotifymessagesService } from "../services/notifymessages.service";
@Component({
  selector: 'app-notifymessages',
  templateUrl: './notifymessages.component.html',
  styleUrls: ['./notifymessages.component.css']
})
export class NotifymessagesComponent implements OnInit {
NotifyMessageData:Observable<any>  ;
  constructor(private Service:NotifymessagesService) { }

  ngOnInit() {
    this.Service.GetNotifyMessages().subscribe(res=>this.NotifyMessageData=res);
    //this.NotifyMessageData= this.Service.GetNotifyMessages()
  }

}
