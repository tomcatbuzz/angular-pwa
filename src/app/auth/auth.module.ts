import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent,
    LoginComponent],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule {}
