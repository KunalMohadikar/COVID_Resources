import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIResource } from './common/apiresources';
import { DateHelper } from './common/datehelper';
import { stringify } from '@angular/compiler/src/util';
import { CommonUtils } from 'src/util/commonUtils';
import { LastUpdated } from './common/lastupdated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  homepage: string = "";
  about: string = "about";
  lastUpdatedStr = "";
  lastUpdateUrl: string = "https://covid-resource-express.herokuapp.com/lastUpdated";
  lastUpdatedRec: Promise<boolean> | undefined;

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    this.getLastUpdatedDate();
  }

  getLastUpdatedDate(){
    this.http.get<LastUpdated>(this.lastUpdateUrl).subscribe(
      response => {
        console.log(response);
        let dateHelper = new DateHelper();
        let newDate = new Date(response.date);
        const monthName = dateHelper.months[newDate.getMonth()];
        const year = newDate.getFullYear();
        const date = newDate.getDate();
        const hr = newDate.getHours();
        const min = newDate.getMinutes();
        const formatted = `${date} ${monthName} ${year}, ${hr}:${min}`;
        this.lastUpdatedStr = this.lastUpdatedStr + formatted;
        this.lastUpdatedRec = Promise.resolve(true);
      }
    )
  }

}

