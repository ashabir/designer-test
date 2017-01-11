import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authservice: AuthService;
  router: Router;

  constructor(authservice: AuthService, router: Router) {
    this.authservice = authservice;
    this.router = router;
   }

  ngOnInit() {
  }

  logout(): void {
    this.authservice.logout();
    this.router.navigate(['login']);
  }

}
