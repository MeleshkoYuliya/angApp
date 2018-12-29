import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignupComponent, SinginComponent],
  imports: [FormsModule, AuthRoutingModule],
})
export class AuthModule {}
