import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  @Input() email: string;
  authService: AuthService;

  constructor(authService:AuthService) { 
    this.authService = authService;
   }

  ngOnInit() {
  }

  reset(): void {
    console.log('RESET', this.email);
    
  }

}
