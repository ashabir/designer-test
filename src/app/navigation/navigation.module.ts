import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './../app.routing';

import { FilterListComponent } from './filter-list/filter-list.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterListComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
