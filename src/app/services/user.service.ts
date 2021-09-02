import { User } from './../classes/user';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/clients";
  constructor(private HttpClient: HttpClient) { }
  getClientsList() : Observable<User[]>{
    return this.HttpClient.get<User[]>(this.baseURL);
  }
}
