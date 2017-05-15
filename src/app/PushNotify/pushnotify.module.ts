import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PushNotifyComponent } from './pushnotify.component';
import { pushnotifyRouting } from './pushnotify.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';
import { UserService } from '../services/getusers.service';
import {AuthGuard} from '../AuthGuard/AuthGuard'
import {ToggleClass} from './toggle'
@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        pushnotifyRouting
    ],
    declarations: [
        PushNotifyComponent, FormsComponent,ToggleClass
    ],
    exports: [
        PushNotifyComponent, FormsComponent,ToggleClass
    ],
    providers: [UserService,AuthGuard]
})
export class PushNotifyModule {


}
