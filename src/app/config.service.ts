import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './common/users';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http : HttpClient) { }

  // url : string = "http://localhost:3000/Users/"
  url : string = 'https://covid-resource-express.herokuapp.com/users'


  getUsers()
  {
    console.log("returning http object");
    return this.http.get<Users[]>(this.url);
  }
}