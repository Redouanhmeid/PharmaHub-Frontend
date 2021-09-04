import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from '../classes/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
 
  private baseURL = "http://localhost:8080/api/v1/stock";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      
    } ),responseType: 'text' as 'json'
  };
  constructor(private HttpClient: HttpClient) { }
  getStockList() : Observable<Stock[]>{
    return this.HttpClient.get<Stock[]>(this.baseURL,this.httpOptions);
  }
}
