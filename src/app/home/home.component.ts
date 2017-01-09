import { Component, OnInit, Input } from '@angular/core';

import { FeatureBoxComponent } from './../feature-box/feature-box.component';
import { Type } from './../feature-box/type.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // type: Type;

  constructor(
    // type:Type
    ) {
      // this.type = type;
    console.log('home const');
   }

  ngOnInit() {
    
  }

}
