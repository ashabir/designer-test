import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Type } from './feature-box/type.model';
import { EventType } from './event-type/event-type.model'
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() type: Type;
  @Input() eventType: EventType;
  eventTypes: string[];
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.eventTypes = ['sports', 'company', 'dining', 'concerts', 'packages', 'theater'];
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
}
