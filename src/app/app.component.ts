import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIResource } from './common/apiresources';
import { DateHelper } from './common/datehelper';
import { stringify } from '@angular/compiler/src/util';
import { CommonUtils } from 'src/util/commonUtils';
import csc from 'country-state-city'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private http : HttpClient) {
  }

}
