import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterListComponent } from './filter-list/filter-list.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { EventTypeComponent } from './event-type/event-type.component';

import { EventType } from './event-type/event-type.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterListComponent,
    FeatureBoxComponent,
    EventTypeComponent,
  ],
  exports: [
    FilterListComponent,
    FeatureBoxComponent,
    EventTypeComponent,
  ],
  providers: []
})
export class HomeModule { }
