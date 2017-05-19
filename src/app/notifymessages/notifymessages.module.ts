import { NgModule } from '@angular/core';
//import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { NotifymessagesComponent } from './notifymessages.component';
import { NotifyMessagesRouting } from "./notifymessages.route";
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { NotifymessagesService } from "../services/notifymessages.service";
import { NotifymessagesformComponent } from './notifymessagesform/notifymessagesform.component';
@NgModule({
  imports: [
    CommonModule,
    //RouterModule,
    NotifyMessagesRouting,
    ReactiveFormsModule,
    FormsModule,
    NotifyMessagesRouting
  ],
  declarations: [NotifymessagesComponent, NotifymessagesformComponent],
  exports:[NotifymessagesComponent,NotifymessagesformComponent],
  providers:[NotifymessagesService]
})
export class NotifymessagesModule { }
