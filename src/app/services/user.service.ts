import { Pharmacien } from './../classes/pharmacien';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/pharmaciens";
  constructor(private HttpClient: HttpClient) { }
  getPharmaciesList() : Observable<Pharmacien[]>{
    return this.HttpClient.get<Pharmacien[]>(this.baseURL);
  }
}
