import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  url: string

  constructor(private http: HttpClient) {

  }

  call_api(term) {
    this.url = 'http://localhost:8983/solr/SrilankanNewsLookUP/select?indent=on&q='+term+'&wt=json';
    return this.http.get(this.url);
  }

}
