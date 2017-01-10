import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
      CommonModule, 
      FormsModule
  ],
  declarations: [
      AuthComponent
  ],
  exports: [
      CommonModule, 
      FormsModule,
      AuthComponent
  ],
  providers: [],
  bootstrap: []
})

export class AuthModule { } 