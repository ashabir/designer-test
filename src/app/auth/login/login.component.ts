import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  authService: AuthService;
  route: Router;

  constructor(authService: AuthService, route: Router) {
    this.authService = authService;
    this.route = route;
  }

  ngOnInit() {
  }

  clicked() {
    // console.log(this.username + " " + this.password);
    (this.authService.login(this.username, this.password)) ? this.route.navigate(['home']) : alert('Cannot authenticate you!');
  }

}
