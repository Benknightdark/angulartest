import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UIModule} from './ui/ui.module';
import { AppComponent } from './app.component';
import {RouterModule} from  '@angular/router';
import {PushNotifyModule} from './PushNotify/pushnotify.module'
import {routeing} from './app.route';
import {HomeComponent} from './home.component'
import {AuthGuard} from './AuthGuard/AuthGuard'
import {LoginComponent} from './Login.component'
import {LoginService} from './services/Login.service'
@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routeing,
    RouterModule,
    UIModule,
    PushNotifyModule
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
