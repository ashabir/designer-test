import { Component, OnInit, Input } from '@angular/core';
import { EventType } from './event-type.model';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.css']
})
export class EventTypeComponent implements OnInit {
  @Input() eventType: string;

  constructor() { }

  ngOnInit() {

  }

}
