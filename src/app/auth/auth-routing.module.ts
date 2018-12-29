import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SinginComponent },
];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
