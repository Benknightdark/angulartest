import { RouterModule ,Routes  ,Router}     from '@angular/router';
import { HomeComponent } from './home.component'
import {AuthGuard} from './AuthGuard/AuthGuard'
import {LoginComponent} from './Login.component'
export const routeing =RouterModule.forRoot( [
   { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
]);
//canActivate:[AuthGuard]
