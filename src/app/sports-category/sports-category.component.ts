import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";

@Component({
  selector: 'app-sports-category',
  templateUrl: './sports-category.component.html',
  styleUrls: ['./sports-category.component.css']
})
export class SportsCategoryComponent implements OnInit {


  public data;
  public heading;
  public res;
  public doc;
  public sportsNews: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;
  public numFound ;


  constructor(private dataService: NewsServiceService) {

    this.sportsNews = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth()+1;
    this.currentDateFormat = this.currentDate.getDate()+'-'+this.month+'-'+this.currentDate.getFullYear();
    console.log(this.currentDateFormat);

    this.showRecentNewsD();
  }

  ngOnInit() {
  }

  public showRecentNewsD(){
    if(this.showRecentNews) {
      this.dataService.sportsNews().subscribe(response => {
        // console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)

        this.sportsNews = [];

        this.doc.forEach((document) => {
          console.log(document.id);
          this.sportsNews.push(document);
        });
      });

    }



  }

}
