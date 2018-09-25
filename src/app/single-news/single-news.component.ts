import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  public data;
  public heading;
  public res;
  public doc;
  public newsData: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;


  constructor(private dataService: NewsServiceService, private route: ActivatedRoute) {

    this.newsData = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth()+1;
    this.currentDateFormat = this.currentDate.getDate()+'-'+this.month+'-'+this.currentDate.getFullYear();
    console.log(this.currentDateFormat);

    this.showSingleNews();
  }

  ngOnInit() {
  }

  public onChanged(): void{
    if (this.inputValue === ''){
      this.showRecentNews = true;
      this.showSingleNews();
    } else {
      this.showRecentNews = false;
      console.log(this.inputValue);
      this.search(this.inputValue);
    }

  }

  public showSingleNews(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(this.showRecentNews) {
      this.dataService.getSingleNews(id).subscribe(response => {
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
