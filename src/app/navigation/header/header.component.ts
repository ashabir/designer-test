import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
