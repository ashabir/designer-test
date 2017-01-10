import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { DetailComponent } from './detail/detail.component';
import { HomeRoutingModule, homeRoutingComponents } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    FeatureBoxComponent,
    EventTypeComponent,
    DetailComponent,
    homeRoutingComponents
  ],
  exports: [
    CommonModule,
    HomeComponent
  ]
})
export class HomeModule { }
