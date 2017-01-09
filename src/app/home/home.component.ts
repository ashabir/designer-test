import { Component, OnInit, Input } from '@angular/core';

import { FeatureBoxComponent } from './../feature-box/feature-box.component';
import { Type } from './../feature-box/type.model';
import { EventType } from './../event-type/event-type.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() type: Type;
  // eventTypes: EventType[];
  eventTypes: string[];

  
  constructor( ) {
    this.eventTypes = ['sports', 'company', 'dining', 'concerts', 'packages', 'theater'];
   }

  ngOnInit() {
    
  }

}
