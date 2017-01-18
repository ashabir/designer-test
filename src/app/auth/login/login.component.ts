import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertCloseable } from './../../shared/alerts/alerts.component';

import { AuthService } from './../auth.service';
import { appRoutes } from './../../app.routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public alert: NgbdAlertCloseable
  ) {
    this.authService = authService;
    this.router = router;
    this.alert = alert;
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
  }

  login() {
    console.log('LOGIN');
    
    let loginData = {
      email: this.username,
      password: this.password
    }
    this.authService.getToken().subscribe(token => {
      this.authService.login(loginData, token).subscribe(res => {
        console.log('RETURN', res);
      },(err) => {
        console.log("COMP ERROR", err);
        this.alert.alerts.push(
          {
            id: 1,
            type: 'success',
            message: 'This is an success alert',
          }
        );
      });
    })
  }

}
