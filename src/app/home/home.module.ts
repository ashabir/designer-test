import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { DetailComponent } from './detail/detail.component';

import { EventType } from './event-type/event-type.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    FeatureBoxComponent,
    EventTypeComponent,
    DetailComponent
  ],
  exports: [
    CommonModule,
    HomeComponent
  ],
  providers: [EventType]
})
export class HomeModule { }
