import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {LoginService} from '../services/Login.service'
import {LoadingComponent} from './loading.component'
@NgModule({
  declarations: [
    NavComponent,LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule
  ],
  providers: [LoginService],
  exports: [NavComponent,LoadingComponent],
})
export class UIModule { }
