import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { SingleNewsComponent } from './single-news/single-news.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { SportsCategoryComponent } from './sports-category/sports-category.component';
import { PoliticsCategoryComponent } from './politics-category/politics-category.component';
import { EducationCategoryComponent } from './education-category/education-category.component';
import { SafePipe } from './pipes/safe.pipe';
import { SpellCheckComponent } from './spell-check/spell-check.component';
import { SpecllCoreectionComponent } from './specll-coreection/specll-coreection.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleNewsComponent,
    MainPageComponent,
    AdvanceSearchComponent,
    SportsCategoryComponent,
    PoliticsCategoryComponent,
    EducationCategoryComponent,
    SafePipe,
    SpellCheckComponent,
    SpecllCoreectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
