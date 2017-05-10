import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {LoginService} from '../services/Login.service'
@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule
  ],
  providers: [LoginService],
  exports: [NavComponent],
})
export class UIModule { }
