import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifymessagesComponent } from './notifymessages.component';
import { NotifyMessagesRouting } from "./notifymessages.route";
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { NotifymessagesService } from "../services/notifymessages.service";
import { NotifymessagesformComponent } from './notifymessagesform/notifymessagesform.component';
import { NotifymessagesreactiveformComponent } from './notifymessagesreactiveform/notifymessagesreactiveform.component';
@NgModule({
  imports: [
    CommonModule,
    NotifyMessagesRouting,
    ReactiveFormsModule,
    FormsModule,
    NotifyMessagesRouting
  ],
  declarations: [NotifymessagesComponent, NotifymessagesformComponent, NotifymessagesreactiveformComponent],
  exports:[NotifymessagesComponent,NotifymessagesformComponent,NotifymessagesreactiveformComponent],
  providers:[NotifymessagesService]
})
export class NotifymessagesModule { }
