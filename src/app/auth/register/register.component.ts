import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

import { Title } from '@angular/platform-browser';
import { appRoutes } from './../../app.routing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() companyCode: string;
  @Input() email: string;
  authService: AuthService;
  route: Router;
  title: Title;

  constructor(authService: AuthService, route: Router, title: Title) {
    this.authService = authService;
    this.route = route;
    this.title = title;
  }

  ngOnInit() {
    Object.keys(appRoutes[0].data).forEach((key) => {
      var keyTest = (appRoutes[0].data)[key];
      // console.log(keyTest);
      this.title.setTitle(keyTest);
    });
  }

  register(): void {
    console.log('REGISTER', this.companyCode, this.email);

  }

}
