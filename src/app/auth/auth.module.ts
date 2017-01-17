import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  imports: [
      CommonModule, 
      FormsModule,
  ],
  declarations: [
      AuthComponent,
      SetPasswordComponent
  ],
  exports: [
      CommonModule, 
      FormsModule
  ],
  providers: []
})

export class AuthModule { } 
