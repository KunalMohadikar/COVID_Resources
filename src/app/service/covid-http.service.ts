import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { dummyAction, updateCovidState } from '../state/covidState/covid.actions';
import { CovidState } from '../state/covidState/covid.state';

@Injectable({
  providedIn: 'root'
})


export class CovidHttpService {

  covidUrl: string = "https://api.covid19india.org/data.json";

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getCovidIndiaInfo(){
    this.http.get<CovidState>(this.covidUrl).subscribe(
      response => {
        console.log(response);
        this.store.dispatch(updateCovidState({
          cases_time_series: response.cases_time_series,
          statewise: response.statewise
        }));

        // this.store.dispatch(dummyAction());
        console.log('dispatched');
      }
    )
  }
}
