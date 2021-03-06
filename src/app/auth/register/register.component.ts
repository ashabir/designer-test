import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from './../auth.service';
import { appRoutes } from './../../app.routing';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() companyCode: string = '';
  @Input() email: string = '';
  @Input() selected: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    // this.authService = authService;
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }

  register(): void {
    console.log('REGISTER', this.companyCode, this.email);
  }

  checkbox(selected): boolean {
    return (this.selected) ? false : true;
  }

  isValid(): boolean {
    return !(this.selected && this.companyCode.length > 0 && this.email.length > 0);
  }

}
