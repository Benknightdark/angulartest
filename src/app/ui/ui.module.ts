import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  exports: [NavComponent],
})
export class UIModule { }
