import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from '../classes/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseURL = "http://localhost:8080/api/v1/stock";
  public available: boolean = true;
  constructor(private HttpClient: HttpClient) { }
  getStockList() : Observable<Stock[]>{
    return this.HttpClient.get<Stock[]>(this.baseURL);
  }
  createStock(stock: Stock): Observable<Object>{
    return this.HttpClient.post(this.baseURL, stock);
  }
}
