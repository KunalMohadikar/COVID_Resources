import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../common/resource';
import { DataElement } from '../common/datasource';
import { ConfigService } from '../config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIResource } from '../common/apiresources';
import { DateHelper } from '../common/datehelper';
import { stringify } from '@angular/compiler/src/util';
import { CommonUtils } from 'src/util/commonUtils';
import csc from 'country-state-city'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

  // url : string = "http://localhost:3000/resource/"
  url : string = 'https://covid-resource-express.herokuapp.com/resource/'
  isMobile: boolean = false;

  columns : Array<string> = [
    "created_at",
    "full_text",
    "phoneNo"
  ];

  index : Array<string> = [
    "created_at",
    "full_text",
    "phoneNo"
  ];

  apiResources : APIResource[] = [];
  
  title = 'covid';
  resources : Array<Resource> = [
    {name: "Oxygen"},
    {name: "Bed"},
    {name: "ICU"},
    {name: "Ambulance"},
    {name: "Ventilator"},
    {name: "Other"},
  ];
  isData = false;
  fetching = false;
  resource: any;
  location = '';
  displayedColumns = ['sno','created_at','full_text', "phoneNo"]
  states: any;
  cities: any;
  city: any;
  state: any;
  false1: boolean = false;
  true1: boolean = true;
  isFirstFetch: boolean = true;
  resc: string = '';
  otherResource: boolean = false;
  cardStyle: string = "margin: auto";

  constructor(private http : HttpClient) {
    let commonUtils = new CommonUtils();
    this.isMobile = commonUtils.isMobileDevice();
    this.states = csc.getStatesOfCountry('IN');
    console.log(this.states);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onStateChange(){
    if(this.state!=null){
      this.cities = csc.getCitiesOfState(this.state.countryCode,this.state.isoCode);
      this.city = null;
      console.log("state changed: ");
      console.log(this.state);
    }
  }

  onResourceChange(){
    if(this.isOtherResource()){
      this.otherResource = true;
    }
    else{
      this.otherResource = false;
    }
  }
  onResourceClear(){
    this.resc = '';
    this.otherResource = false;
  }

  onStateClear(){
    this.cities = null;
    this.city = null;
  }


  getUsers()
  {
    console.log(this.state);
    let location = '';
    if(this.city!=null){
      location = this.city.name;
    }
    else if(this.state!=null){
      location = this.state.name;
    }
    else{
      location = '';
    }

    if(this.resource == null){
      this.resc = '';
    }
    else if(!this.isOtherResource()){
      this.resc = this.resource.name;
    }
    console.log("resource: " + this.resource?.name);
    console.log("location: " + this.location);
    console.log("resc    : " + this.resc);
    console.log("returning http object");
    const params = new HttpParams()
    .set('location', location)
    .set('resource', this.resc);
    return this.http.get<APIResource[]>(this.url,{params});
  }

  searchResource(){
    this.isFirstFetch = false;
    this.cardStyle = "";
    this.fetching = true;
    this.getUsers().subscribe(
      response => {
        response.sort(function(a,b){
          let created1 = a.created_at;
          let created2 = b.created_at;
          let created1Date = new Date(created1.replace("+0000 ", "") + " UTC");
          let created2Date = new Date(created2.replace("+0000 ", "") + " UTC");
          return created1Date < created2Date ? 1 : -1;
        });
        response.forEach(function (elem) {
          let created1 = elem.created_at;
          let created1Date = new Date(created1.replace("+0000 ", "") + " UTC");
          let currentDate = new Date();
          const diffTime = Math.abs(currentDate.getTime() - created1Date.getTime());
          elem.timeDiffSeconds = diffTime;
          elem.timeDiffMins = Math.ceil(diffTime/(1000*60));
          let formatted = "";
          let dateHelper = new DateHelper();
          if(elem.timeDiffMins > 1339){
              const monthName = dateHelper.months[created1Date.getMonth()];
              const year = created1Date.getFullYear();
              const date = created1Date.getDate();
              formatted = `${date} ${monthName} ${year}`;
          }
          else if(elem.timeDiffMins > 59){
              const hours = Math.floor(elem.timeDiffMins/60);
              const mins = elem.timeDiffMins%60;
              formatted = `${hours} hr, ${mins} mins ago`;
          }
          else{
              formatted = elem.timeDiffMins.toString() + " mins ago";
          }
          elem.dateTime = formatted;
        })
        this.apiResources = response;
        console.log(this.apiResources[0]);
        if(this.apiResources!=null && this.apiResources.length!=0){
          this.isData = true;
        }
        else{
          this.isData = false;
        }
        this.fetching = false;
      } 
    )
    
  }

  isOtherResource(){
    if(this.resource?.name == this.resources[this.resources.length-1].name){
      return true;
    }
    return false;
  }
}

