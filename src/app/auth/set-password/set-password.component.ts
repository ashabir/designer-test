import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from './../auth.service';
import { appRoutes } from './../../app.routing';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  isError: boolean;

  form: FormGroup;

  name = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  confirmPassword = new FormControl("", Validators.required);

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      "password": this.password,
      "confirmPassword": this.confirmPassword
    });
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        // console.log("ROUTE!!!!: ", route);
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data) // Converts route.data to an Observable!!
      .subscribe((event) => this.titleService.setTitle(event['title']));

    this.callObservable();
  }

  callObservable() {
    this.form.valueChanges
      .map((value) => {
        console.log('Map: ', value.password);
        return value;
      })
      .filter((value) => this.form.valid)
      .subscribe((value) => {
        (value.password === value.confirmPassword) ? this.isError = false : this.isError = true;
      });
  }

}
