import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';

import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';

const appRouter: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'InviteManager: Home' } },
    { path: 'detail', component: DetailComponent, data: { title: 'InviteManager: Details' } },
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

export class HomeRoutingModule { }

export const homeRoutingComponents = [HomeComponent, DetailComponent];



