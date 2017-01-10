import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
//   { path: '', component: AuthComponent, data: { title: 'InviteManager: Login' } },
  { path: 'home', component: HomeComponent, data: { title: 'InviteManager: Home' } },
  { path: 'search', component: SearchComponent, data: { title: 'InviteManager: Search Results' } }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, SearchComponent];
