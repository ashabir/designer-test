import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'InviteManager: Home' } },
    { path: 'detail', component: DetailComponent, data: { title: 'InviteManager: Details' } },
    { path: '', component: RegisterComponent, data: { title: 'InviteManager: Register' } },
    { path: 'login', component: LoginComponent, data: { title: 'InviteManager: Login' } },
    { path: 'reset', component: ResetComponent, data: { title: 'InviteManager: Reset' } },
    { path: 'forgotPassword', redirectTo: 'reset', pathMatch: 'full' },
    { path: 'search', component: SearchComponent, data: { title: 'InviteManager: Search Results' } },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const routingComponents = [
    HomeComponent, 
    DetailComponent, 
    RegisterComponent,
    LoginComponent,
    ResetComponent,  
    SearchComponent,
    PageNotFoundComponent
];
