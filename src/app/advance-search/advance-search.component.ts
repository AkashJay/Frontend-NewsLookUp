import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {

  public inputDate1;
  public inputDate2;
  public data;
  public heading;
  public res;
  public doc;
  public newsData: any;
  public advanceSearchResult: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;
  public numFound;
  public sortBy ='sort by' ;
  public groupBy = 'group by';
  public months;

  public sortOption = [
    'date',
    'month',
    'year',
  ];

  constructor(private dataService: NewsServiceService) {
    this.newsData = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth() + 1;
    this.currentDateFormat = this.currentDate.getDate() + '-' + this.month + '-' + this.currentDate.getFullYear();
    console.log(this.currentDateFormat);

    this.showRecentNewsD();

  }

  ngOnInit() {
  }

  public onChanged() {

    console.log(this.inputDate1);
    console.log(this.inputDate2);
    console.log(this.sortBy);
    console.log(this.groupBy);

    if (this.sortBy === 'sort by' && this.groupBy === 'group by' && this.inputDate1 && this.inputDate2) {
      this.dataService.dateRangeSearch(this.inputDate1, this.inputDate2).subscribe(response => {
        debugger
        console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)
        //
        this.advanceSearchResult = [];
        //
        this.doc.forEach((document) => {
          console.log(document.id);
          this.advanceSearchResult.push(document);
        });

      });

    } else if (this.sortBy !== 'sort by' && this.groupBy === 'group by' && this.inputDate1 && this.inputDate2) {
      this.dataService.advanceSearchSort(this.inputDate1, this.inputDate2,this.sortBy).subscribe(response => {
        debugger
        console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)
        //
        this.advanceSearchResult = [];
        //
        this.doc.forEach((document) => {
          console.log(document.id);
          this.advanceSearchResult.push(document);
        });

      });

    } else if ( this.sortBy !== 'sort by' && this.groupBy !== 'group by' && this.inputDate1 && this.inputDate2) {
      this.dataService.advanceSearchWithGrouping(this.inputDate1, this.inputDate2,this.sortBy,this.groupBy).subscribe(response => {

        console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)
        //
        this.advanceSearchResult = [];
        //
        this.doc.forEach((document) => {
          console.log(document.id);
          this.advanceSearchResult.push(document);
        });

      });

    } else if ( this.sortBy === 'sort by' && this.groupBy !== 'group by' && this.inputDate1 && this.inputDate2) {
      this.dataService.dateRangeSearchGroupingNotSorting(this.inputDate1, this.inputDate2,this.groupBy).subscribe(response => {

        console.log(response);
        this.data = response;
        // console.log(this.data.response);
        this.res = this.data.response;
        this.doc = this.res.docs;
        //console.log(this.n)
        //
        this.advanceSearchResult = [];
        //
        this.doc.forEach((document) => {
          console.log(document.id);
          this.advanceSearchResult.push(document);
        });

      });

    }

  }

  public showRecentNewsD() {
    if (this.showRecentNews) {
      this.dataService.getRecentNews(this.currentDateFormat).subscribe(response => {
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
}
