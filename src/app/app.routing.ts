import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
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

export const routingComponents = [SearchComponent];
