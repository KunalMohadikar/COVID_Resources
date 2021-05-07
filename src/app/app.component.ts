import { Component, Input } from '@angular/core';
import { Resource } from './common/resource';

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
  res = {name: "AA"};
  resource = this.resources[0];

  searchResource(){
    console.log(this.resource);
  }

}
