import { RouterModule } from '@angular/router';
import { PushNotifyComponent } from './pushnotify.component';
import {AuthGuard} from '../AuthGuard/AuthGuard'
export const pushnotifyRouting = RouterModule.forChild([
    { path: 'pushnotify', component: PushNotifyComponent }]);
