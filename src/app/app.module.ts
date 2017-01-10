import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule, routingComponents } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    MainComponent,
    HomeComponent,
    FeatureBoxComponent,
    EventTypeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NavigationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
