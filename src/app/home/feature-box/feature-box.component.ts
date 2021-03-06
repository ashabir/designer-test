import { Component, OnInit, Input } from '@angular/core';

import { Type } from './type.model';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.scss']
})
export class FeatureBoxComponent implements OnInit {
  @Input() type: Type;
  
  constructor() { 
    // console.log('featBox constructor', this.type);
  }

  ngOnInit() {
    // console.log('featBox onInit', this.type);
  }

}
