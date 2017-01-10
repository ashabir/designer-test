import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';

import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';


const appRouter: Routes = [
    { path: '', component: RegisterComponent, data: { title: 'InviteManager: Register' } },
    { path: 'login', component: LoginComponent, data: { title: 'InviteManager: Login' } },
    { path: 'reset', component: ResetComponent, data: { title: 'InviteManager: Reset' } },
    { path: 'forgotPassword', redirectTo: 'reset', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(appRouter)
    ],
    exports: [
        RouterModule
    ]

})

export class AuthRoutingModule { }

export const authRoutingComponents = [RegisterComponent, LoginComponent, ResetComponent];



