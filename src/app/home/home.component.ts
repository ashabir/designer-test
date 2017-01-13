import { Component, OnInit, Input } from '@angular/core';

import { Type } from './feature-box/type.model';
import { EventType } from './event-type/event-type.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() type: Type;
  @Input() eventType: EventType;
  // eventTypes: EventType[];
  eventTypes: string[];

  
  constructor() {
    this.eventTypes = ['sports', 'company', 'dining', 'concerts', 'packages', 'theater'];
   }

  ngOnInit() {
    
  }

}
