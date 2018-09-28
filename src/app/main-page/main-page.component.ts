import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from "../news-service.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public data;
  public heading;
  public res;
  public spellcheck;
  public suggestions;
  public suggest;
  public suggestWords : { word: string, freq: string }[];
  public doc;
  public newsData: any;
  public inputValue = '';
  public currentDate;
  public currentDateFormat;
  public month;
  public showRecentNews = true;
  public numFound ;
  public searchBoolean = false;
  public highlighing;
  public head;
  public highlightHeading: { id: string, name: string }[];
  public searchA = false;
  public  index = 0;


  constructor(private dataService: NewsServiceService) {

    this.newsData = [];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth()+1;
    this.currentDateFormat = this.currentDate.getDate()+'-'+this.month+'-'+this.currentDate.getFullYear();
    console.log(this.currentDateFormat);

    this.showRecentNewsD();
  }

  ngOnInit() {
  }


  public onChanged(): void{
    this.searchBoolean = true;
    if (this.inputValue === ''){
      this.showRecentNews = true;
      this.showRecentNewsD();
    } else {
      this.showRecentNews = false;
      console.log(this.inputValue);
      this.search(this.inputValue);
    }

  }

  public showRecentNewsD(){
    if(this.showRecentNews) {
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

  public search(term: string): void{
    this.searchA = true;
    this.highlightHeading =[];
    this.suggestWords = [];


    this.dataService.call_api(term).subscribe(response => {
      console.log(response);
      this.data = response;
      this.res = this.data.response;
      this.highlighing = this.data.highlighting;

      for (let key in this.highlighing) {

       this.head = this.highlighing[key].heading;
       if(this.head === undefined){

            this.highlightHeading.push({id : key ,name :'notmatch'})
       } else if (this.head !== undefined){
         this.head.forEach((h) => {
           this.highlightHeading.push({id : key ,name :h});
         })
       }



        // Use `key` and `value`
      }
      this.numFound = this.res.numFound;
      this.doc = this.res.docs;
      if(this.numFound === 0){
        this.dataService.spellchecking(this.inputValue).subscribe(response => {
          // console.log(response);
          this.data = response;
          console.log(this.data.spellcheck);
          this.spellcheck = this.data.spellcheck;
          this.suggestions = this.spellcheck.suggestions;
          this.suggest = this.suggestions[1].suggestion;
          console.log(this.suggest);
          this.suggest.forEach((s)=>{
                this.suggestWords.push({word : s.word, freq :s.freq});

          });

          console.log(this.suggestWords);

          this.newsData = [];

          this.doc.forEach((document) => {
            console.log(document.id);
            this.newsData.push(document);
          });
        });
      }

      this.newsData = [];

      this.doc.forEach((document) => {
        // console.log(document.id);

        this.newsData.push(document);


      });

    });


  }

}
