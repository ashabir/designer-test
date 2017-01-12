import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() companyCode: string;
  @Input() email: string;
  authService: AuthService;
  route: Router;

  constructor(authService: AuthService, route: Router) {
    this.authService = authService;
    this.route = route;
   }

  ngOnInit() {
  }

  register(): void {
    console.log('REGISTER', this.companyCode, this.email);
    
  }

}
