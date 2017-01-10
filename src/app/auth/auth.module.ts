import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
      CommonModule, 
      FormsModule,
  ],
  declarations: [
      AuthComponent,
      LoginComponent,
      ResetComponent,
      RegisterComponent,
  ],
  exports: [
      CommonModule, 
      FormsModule,
      AuthComponent
  ],
  providers: []
})

export class AuthModule { } 