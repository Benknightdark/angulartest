import { RouterModule ,Routes  ,Router}     from '@angular/router';
import { HomeComponent } from './home.component'
export const routeing =RouterModule.forRoot( [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
]);