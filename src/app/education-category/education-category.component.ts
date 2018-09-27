import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";

@Component({
  selector: 'app-education-category',
  templateUrl: './education-category.component.html',
  styleUrls: ['../sports-category/sports-category.component.css']
})
export class EducationCategoryComponent implements OnInit {


  public data;
  public heading;
  public res;
  public doc;
  public educationNews: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;
  public numFound ;


  constructor(private dataService: NewsServiceService) {
    this.educationNews = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth()+1;
    this.currentDateFormat = this.currentDate.getDate()+'-'+this.month+'-'+this.currentDate.getFullYear();
    console.log(this.currentDateFormat);

    this.showRecentNewsD();
  }

  ngOnInit() {
  }

  public showRecentNewsD() {
    if (this.showRecentNews) {
      this.dataService.educationNews().subscribe(response => {
        // console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)

        this.educationNews = [];

        this.doc.forEach((document) => {
          console.log(document.id);
          this.educationNews.push(document);
        });
      });

    }

  }

}
