import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() searchTerm: string;

  constructor(
    private authService: AuthService, 
    private router: Router
    ) {   }

  ngOnInit() {
    
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {      
    return this.authService.isLoggedIn();
  }

  search(): void {

  }

  isLogin(): boolean {
    if(this.router.url === '/login') {
      return true;
    }
    return false;
  }
}
