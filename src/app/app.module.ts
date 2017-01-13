import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// importing bootstrap 4 from https://ng-bootstrap.github.io/#/home
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app.routing';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NavigationModule,
    HomeModule,
    AuthModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
