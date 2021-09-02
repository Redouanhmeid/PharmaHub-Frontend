import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseURL = "http://localhost:8080/api/v1/produits";
  constructor(private HttpClient: HttpClient) { }
  getProduitsList() : Observable<Produit[]>{
    return this.HttpClient.get<Produit[]>(this.baseURL);
  }
  createProduit(produit: Produit): Observable<Object>{
    return this.HttpClient.post(this.baseURL, produit);
  }
  updateProduit(code: number, produit: Produit): Observable<Object>{
    return this.HttpClient.put(this.baseURL +'/'+ code, produit);
  }
  getProduitByCode(code: number): Observable<Produit>{
    return this.HttpClient.get<Produit>(this.baseURL +'/'+ code);
  }
  deleteProduit(code: number): Observable<Object>{
    return this.HttpClient.delete(this.baseURL +'/'+ code);
  }
}
