import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

import { Title } from '@angular/platform-browser';
import { appRoutes } from './../../app.routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  authService: AuthService;
  route: Router;
  title: Title;

  constructor(authService: AuthService, route: Router, title: Title) {
    this.authService = authService;
    this.route = route;
    this.title = title;
  }

  ngOnInit() {
    Object.keys(appRoutes[1].data).forEach((key) => {
      var keyTest = (appRoutes[1].data)[key];
      // console.log(keyTest);
      this.title.setTitle(keyTest);
    });
  }

  login() {
    // console.log(this.username + " " + this.password);
    (this.authService.login(this.username, this.password)) ? this.route.navigate(['home']) : alert('Cannot authenticate you!');
  }

}
