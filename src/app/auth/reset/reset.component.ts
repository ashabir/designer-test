import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from './../auth.service';
import { appRoutes } from './../../app.routing';



@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  @Input() email: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) { }

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

  reset(): void {
    console.log('RESET', this.email);

  }

}
