import { Component } from '@angular/core';

import { NewsServiceService } from './news-service.service';
import {Data} from "../modeldata/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ NewsServiceService ]
})
export class AppComponent {

  public data;
  public heading;
  public res;
  public doc;
  public newsData: any;
  public inputValue: any;

   constructor(private dataService: NewsServiceService){

     this.newsData = [];

    }

  public onChanged(): void{
    console.log(this.inputValue);
    this.search(this.inputValue);
  }

  public search(term: string): void{
    this.dataService.call_api(term).subscribe(response => {
      // console.log(response);
      this.data = response;
      // console.log(this.data.response);
      this.res = this.data.response;
      this.doc = this.res.docs;
      //console.log(this.n)

      this.newsData = [];

      this.doc.forEach((document) => {
        console.log(document.id);

        this.newsData.push(document);


      });

    });

  }





}
