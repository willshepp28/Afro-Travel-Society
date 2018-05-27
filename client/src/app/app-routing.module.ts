import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'activity/:id/:name', component: ActivityComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
