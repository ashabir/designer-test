import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent, data: { title: 'InviteManager: Login' } },
  { path: 'home', component: HomeComponent, data: { title: 'InviteManager: Home' } },
  { path: 'search', component: SearchComponent, data: { title: 'InviteManager: Search Results' } }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    MainComponent,
    HomeComponent,
    FilterListComponent,
    FeatureBoxComponent,
    EventTypeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
