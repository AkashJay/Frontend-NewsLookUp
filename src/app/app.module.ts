import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { SingleNewsComponent } from './single-news/single-news.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleNewsComponent,
    MainPageComponent,
    AdvanceSearchComponent
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
