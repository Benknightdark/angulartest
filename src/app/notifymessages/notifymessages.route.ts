import { RouterModule } from '@angular/router';
import { NotifymessagesComponent } from './notifymessages.component';
import {AuthGuard} from '../AuthGuard/AuthGuard'
import { NotifymessagesformComponent } from "./notifymessagesform/notifymessagesform.component";
import { NotifymessagesreactiveformComponent } from "./notifymessagesreactiveform/notifymessagesreactiveform.component";

export const NotifyMessagesRouting = RouterModule.forChild([
    { path: 'NotifyMessages', component: NotifymessagesComponent,canActivate:[AuthGuard] },
    { path: 'NotifyMessages/Detail/:id', component: NotifymessagesformComponent,canActivate:[AuthGuard] },
    { path: 'NotifyMessages/Edit/:id', component: NotifymessagesformComponent,canActivate:[AuthGuard] },
      { path: 'NotifyMessagesReactiveForms/Detail/:id', component: NotifymessagesreactiveformComponent,canActivate:[AuthGuard] },
    { path: 'NotifyMessagesReactiveForms/Edit/:id', component: NotifymessagesreactiveformComponent,canActivate:[AuthGuard] }

    ]


    );
