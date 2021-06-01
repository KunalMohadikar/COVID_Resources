import { Component, Input, OnDestroy } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIResource } from './common/apiresources';
import { DateHelper } from './common/datehelper';
import { stringify } from '@angular/compiler/src/util';
import { CommonUtils } from 'src/util/commonUtils';
import { LastUpdated } from './common/lastupdated';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { COVID_STATE_NAME, getCasesTimeSeries, getLatestCase } from './state/covidState/covid.selector';
import { CovidState, DayInfo } from './state/covidState/covid.state';
import { CovidHttpService } from './service/covid-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy{

  homepage: string = "";
  about: string = "about";
  lastUpdatedStr = "";
  lastUpdateUrl: string = "https://covid-resource-express.herokuapp.com/lastUpdated";
  lastUpdatedRec: Promise<boolean> | undefined;
  covidDaysSubscription: Subscription;
  latestDaySubscription: Subscription;
  cases_time_series: Array<DayInfo> = [];
  latestDayInfo: DayInfo | undefined;

  constructor(private http : HttpClient, private store: Store<AppState>, private covidHttp: CovidHttpService) {
    // console.log(this.cases_time_series);
    this.covidDaysSubscription = this.store.select(getCasesTimeSeries).subscribe( data => {
      this.cases_time_series = data;
      console.log("cases_time_series");
      console.log(this.cases_time_series);
    });

    this.latestDaySubscription = this.store.select(getLatestCase).subscribe(data => {
      if(data!=null){
        console.log("latestDayInfo");
        console.log(data);
        this.latestDayInfo = data;
      }
    });

    this.getCovidIndiaInfo();
  }
  ngOnDestroy(): void {
    if(this.covidDaysSubscription){
      this.covidDaysSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getLastUpdatedDate();
  }

  getLastUpdatedDate(){
    this.http.get<LastUpdated>(this.lastUpdateUrl).subscribe(
      response => {
        // console.log(response);
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

  getCovidIndiaInfo(){
    this.covidHttp.getCovidIndiaInfo();
  }

}

