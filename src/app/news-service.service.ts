import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  url: string
  public currentDate;

  constructor(private http: HttpClient) {

  }

  call_api(term) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }

  public getRecentNews(date) {
    this.currentDate = date+'T18:30:00Z';
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:[2018-08-20T18:30:00Z%20TO%202018-09-26T18:30:00Z]&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }

  public getSingleNews(id) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=id:'+id+'&wt=json';
    return this.http.get(this.url);
  }



  public advanceSearchSort(date1,date2,sort) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&sort='+sort+'%20desc&wt=json';
    return this.http.get(this.url);
  }

  public advanceSearchWithGrouping(date1,date2,sort,group) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&group=true&group.field='+group+'&wt=json&group.limit=3&sort='+sort+'%20desc&group.main=true';
   console.log(this.url);
    return this.http.get(this.url);
  }

  public dateRangeSearch(date1,date2,) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&wt=json';
    return this.http.get(this.url);
  }


  public dateRangeSearchGroupingNotSorting(date1,date2,group) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true';
    return this.http.get(this.url);
  }

  public sportsNews() {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=sports&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }

  public politicNews() {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=politics&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }

  public educationNews() {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=education&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }

  public phraseOnly(term) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q="'+term+'"&wt=json';
    return this.http.get(this.url);
  }

  public phraseAndSortOnly(term,sort) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q="'+term+'"&sort='+sort+'%20desc&wt=json';
    return this.http.get(this.url);
  }

  public phraseAndGroupOnly(term,group) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q="'+term+'"&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json';
    return this.http.get(this.url);
  }

  public phraseAndGroupAndSortingOnly(term,group,sort) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q="'+term+'"&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json&sort='+sort+'%20desc';
    return this.http.get(this.url);
  }

  public phraseAndGroupAndSortingAndDateOnly(term,group,sort,date1,date2) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q="'+term+'" AND date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json&sort='+sort+'%20desc';
    return this.http.get(this.url);
  }

  public normalOnly(term) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&wt=json';
    return this.http.get(this.url);
  }

  public normalAndSortOnly(term,sort) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&sort='+sort+'%20desc&wt=json';
    return this.http.get(this.url);
  }

  public normalAndGroupOnly(term,group) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json';
    return this.http.get(this.url);
  }

  public normalAndGroupAndSortingOnly(term,group,sort) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json&sort='+sort+'%20desc';
    return this.http.get(this.url);
  }

  public normalAndGroupAndSortingAndDateOnly(term,group,sort,date1,date2) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+' AND date:['+date1+'T18:30:00Z%20TO%20'+date2+'T18:30:00Z]&group=true&group.field='+group+'&wt=json&group.limit=3&%20desc&group.main=true&wt=json&sort='+sort+'%20desc';
    return this.http.get(this.url);
  }








}
