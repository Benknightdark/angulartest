import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http'
import { NotifymessagesComponent } from './notifymessages.component';
import { NotifyMessagesRouting } from "./notifymessages.route";
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { NotifymessagesService } from "../services/notifymessages.service";
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NotifyMessagesRouting,
    ReactiveFormsModule,
    FormsModule,
    NotifyMessagesRouting
  ],
  declarations: [NotifymessagesComponent],
  exports:[NotifymessagesComponent],
  providers:[NotifymessagesService]
})
export class NotifymessagesModule { }
