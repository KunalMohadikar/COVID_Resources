import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';
import { DataElement } from './common/datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'covid';
  resources : Array<Resource> = [
    {name: "Oxygen"},
    {name: "Para"}
  ];
  isData = false;
  res = {name: "AA"};
  resource = this.resources[0];
  location = '';
  displayedColumns = ["seqNo", 'full_text', "phoneNo"]

  dataSource: Array<DataElement> = [
    {
      seqNo: 1,
      full_text: "Hello Brother",
      phoneNo: 2222222222
    },
    {
      seqNo: 2,
      full_text: "Hello Brother 2",
      phoneNo: 1111111111
    },
    {
      seqNo: 3,
      full_text: "Hello Brother 3",
      phoneNo: 3333333333
    },
  ]

  searchResource(){
    console.log(this.resource);
    console.log(this.location);
    this.isData = true;
  }

}
