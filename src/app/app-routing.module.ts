import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleNewsComponent} from "./single-news/single-news.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AdvanceSearchComponent} from "./advance-search/advance-search.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'SingleNews/:id', component: SingleNewsComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'advaceSearch', component: AdvanceSearchComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
