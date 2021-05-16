import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Users } from './common/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  // configUrl = 'http://localhost:3000/users';
  configUrl = 'https://covid-resource-express.herokuapp.com/users'

  constructor(private rs : ConfigService) { }

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
  res = {name: "AA"};
  resource = this.resources[0];
  location = '';
  displayedColumns = ["created_at", 'full_text', "phoneNo"]


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

  searchResource(){
    console.log(this.resource);
    console.log(this.location);

    this.rs.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(this.users[0]);
        this.isData = true;
      } 
    )
  }

}
