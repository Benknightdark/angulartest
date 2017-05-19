import { RouterModule } from '@angular/router';
import { NotifymessagesComponent } from './notifymessages.component';
import {AuthGuard} from '../AuthGuard/AuthGuard'
export const NotifyMessagesRouting = RouterModule.forChild([
    { path: 'NotifyMessages', component: NotifymessagesComponent,canActivate:[AuthGuard] }]);
