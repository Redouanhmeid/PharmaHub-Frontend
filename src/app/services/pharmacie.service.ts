import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pharmacie } from '../classes/pharmacie';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {
  private baseURL = "http://localhost:8080/api/v1/pharmacies";
  constructor(private HttpClient: HttpClient) { }
  getPharmaciesList() : Observable<Pharmacie[]>{
    return this.HttpClient.get<Pharmacie[]>(this.baseURL);
  }
  createPharmacie(pharmacie: Pharmacie): Observable<Object>{
    return this.HttpClient.post(this.baseURL, pharmacie);
  }
  updatePharmacie(ice: number, pharmacie: Pharmacie): Observable<Object>{
    return this.HttpClient.put(this.baseURL +'/'+ ice, pharmacie);
  }
  getPharmacieByICE(ice: number): Observable<Pharmacie>{
    return this.HttpClient.get<Pharmacie>(this.baseURL +'/'+ ice);
  }
  deletePharmacie(ice: number): Observable<Object>{
    return this.HttpClient.delete(this.baseURL +'/'+ ice);
  }
}
