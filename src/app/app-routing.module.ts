import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleNewsComponent} from "./single-news/single-news.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AdvanceSearchComponent} from "./advance-search/advance-search.component";
import {SportsCategoryComponent} from "./sports-category/sports-category.component";
import {PoliticsCategoryComponent} from "./politics-category/politics-category.component";
import {EducationCategoryComponent} from "./education-category/education-category.component";
import {SpellCheckComponent} from "./spell-check/spell-check.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'SingleNews/:id', component: SingleNewsComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'advaceSearch', component: AdvanceSearchComponent },
  { path: 'sports', component: SportsCategoryComponent },
  { path: 'politics', component: PoliticsCategoryComponent },
  { path: 'education', component: EducationCategoryComponent },
  { path: 'spellchek/:word', component: SpellCheckComponent }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
