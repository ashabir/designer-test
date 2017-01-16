import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

import { Title } from '@angular/platform-browser';
import { appRoutes } from './../../app.routing';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  @Input() email: string;
  authService: AuthService;
  title: Title;

  constructor(authService: AuthService, title: Title) {
    this.authService = authService;
    this.title = title;
  }

  ngOnInit() {
    Object.keys(appRoutes[2].data).forEach((key) => {
      var keyTest = (appRoutes[2].data)[key];
      // console.log(keyTest);
      this.title.setTitle(keyTest);
    });
  }

  reset(): void {
    console.log('RESET', this.email);

  }

}
