import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private titleService: Title
  ) {
    this.authService = authService;
    this.router = router;
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
    (this.authService.login(this.username, this.password)) ? this.router.navigate(['home']) : alert('Cannot authenticate you!');
  }

}
