import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-spell-check',
  templateUrl: './spell-check.component.html',
  styleUrls: ['../sports-category/sports-category.component.css']
})
export class SpellCheckComponent implements OnInit {

  public data;
  public heading;
  public res;
  public doc;
  public suggestNews: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;
  public numFound ;

  constructor(private dataService: NewsServiceService, private route: ActivatedRoute) {
    this.suggestNews = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth()+1;
    this.currentDateFormat = this.currentDate.getDate()+'-'+this.month+'-'+this.currentDate.getFullYear();
    console.log(this.currentDateFormat);


    this.showRecentNewsD();
  }

  ngOnInit() {
  }

  public showRecentNewsD() {

    const word1 = this.route.snapshot.paramMap.get('word');
    console.log(word1);
    if (this.showRecentNews) {
      this.dataService.spellCheckNews(word1).subscribe(response => {
        console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)

        this.suggestNews = [];

        this.doc.forEach((document) => {
          console.log(document.id);
          this.suggestNews.push(document);
        });
      });

    }

  }

}
