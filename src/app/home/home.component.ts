import { Component, OnInit, Input } from '@angular/core';

import { FeatureBoxComponent } from './../feature-box/feature-box.component';
import { Type } from './../feature-box/type.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() type: Type;
  @Input() type2: string;

  constructor(
    // type:Type
    ) {
    // this.type = 'string';
    console.log('home const');
    console.log(this.type);
    this.type2 = 'blah';
    console.log("Value of typ2: ", this.type2);
   }

  ngOnInit() {
    
  }

}
