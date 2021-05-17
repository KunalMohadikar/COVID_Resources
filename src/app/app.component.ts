import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from './common/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  // url : string = "http://localhost:3000/resource/"
  url : string = 'https://covid-resource-express.herokuapp.com/resource/'

  constructor(private http : HttpClient) { }

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

  users : Users[] = [];
  
  title = 'covid';
  resources : Array<Resource> = [
    {name: "Oxygen"},
    {name: "Para"}
  ];
  isData = false;
  fetching = false;
  res = {name: "AA"};
  resource = '';
  location = '';
  displayedColumns = ['full_text', "phoneNo"]


  dataSource: Array<DataElement> = [
    {
      created_at: 1,
      full_text: "Hello Brother",
      phoneNo: 2222222222
    },
    {
      created_at: 2,
      full_text: "Hello Brother 2",
      phoneNo: 1111111111
    },
    {
      created_at: 3,
      full_text: "Hello Brother 3",
      phoneNo: 3333333333
    },
  ];


  getUsers()
  {
    console.log("returning http object");
    const params = new HttpParams()
    .set('location', this.location)
    .set('resource', this.resource);
    return this.http.get<Users[]>(this.url,{params});
  }

  searchResource(){
    console.log(this.resource);
    console.log(this.location);
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
        this.users = response;
        console.log(this.users[0]);
        this.isData = true;
        this.fetching = false;
      } 
    )
    
  }

}
