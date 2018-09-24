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
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&wt=json';
    return this.http.get(this.url);
  }

  public getRecentNews(date) {
    this.currentDate = date+'T18:30:00Z';
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q=date:[2018-08-20T18:30:00Z%20TO%202018-09-20T18:30:00Z]&sort=date%20desc&wt=json';
    return this.http.get(this.url);
  }


}
