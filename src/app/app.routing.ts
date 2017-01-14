import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AuthService } from './auth/auth.service';
import { LoggedInGuard } from './guards/loggedIn.guard.service';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: '', component: RegisterComponent, data: { title: 'InviteManager: Register' } },
    { path: 'login', component: LoginComponent, data: { title: 'InviteManager: Login' } },
    { path: 'reset', component: ResetComponent, data: { title: 'InviteManager: Reset' } },
    { path: 'forgotPassword', redirectTo: 'reset', pathMatch: 'full' },
    { path: 'home', 
        component: HomeComponent, 
        canActivate: [LoggedInGuard], 
        data: { title: 'InviteManager: Home' } 
    },
    { path: 'detail', 
        component: DetailComponent, 
        canActivate: [LoggedInGuard],
        data: { title: 'InviteManager: Details' } 
    },
    { path: 'search', 
        component: SearchComponent, 
        canActivate: [LoggedInGuard],
        data: { title: 'InviteManager: Search Results' } 
    },
    { path: '**', 
        component: PageNotFoundComponent,
        canActivate: [LoggedInGuard] 
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoggedInGuard,
        AuthService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
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
