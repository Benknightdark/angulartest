import { RouterModule } from '@angular/router';
import { PushNotifyComponent } from './pushnotify.component';
export const pushnotifyRouting = RouterModule.forChild([
    { path: 'pushnotify', component: PushNotifyComponent, }]);