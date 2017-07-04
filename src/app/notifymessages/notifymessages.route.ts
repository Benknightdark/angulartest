import { RouterModule } from '@angular/router';
import { NotifymessagesComponent } from './notifymessages.component';
import { AuthGuard } from '../AuthGuard/AuthGuard'
import { NotifymessagesformComponent } from "./notifymessagesform/notifymessagesform.component";
import { NotifymessagesreactiveformComponent } from "./notifymessagesreactiveform/notifymessagesreactiveform.component";

export const NotifyMessagesRouting = RouterModule.forChild([
  { path: 'NotifyMessages', component: NotifymessagesComponent },
  { path: 'NotifyMessages/Detail/:id', component: NotifymessagesformComponent },
  { path: 'NotifyMessages/Edit/:id', component: NotifymessagesformComponent },
  { path: 'NotifyMessagesReactiveForms/Detail/:id', component: NotifymessagesreactiveformComponent },
  { path: 'NotifyMessagesReactiveForms/Edit/:id', component: NotifymessagesreactiveformComponent },
  { path: 'NotifyMessagesReactiveForms/Create', component: NotifymessagesreactiveformComponent }
]


);
