import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from './common/users';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url : string = "http://localhost:3000/Users/"
  // url : string = 'https://covid-resource-express.herokuapp.com/users/'

  constructor(private http : HttpClient) {}

  


  getUsers()
  {
    console.log("returning http object");
    // const params = new HttpParams()
    // .set('location', this.location);
    return this.http.get<Users[]>(this.url);
  }
}