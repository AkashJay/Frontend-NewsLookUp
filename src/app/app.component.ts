import { Component } from '@angular/core';

import { NewsServiceService } from './news-service.service';
import {Data} from "../modeldata/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ NewsServiceService ]
})
export class AppComponent {


   constructor(private router: Router){ }

  ngOnInit() {
    console.log(this.router.url);
  }

}
