import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pharmacien } from '../pharmacien';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {
  private baseURL = "http://localhost:8080/api/v1/pharmaciens";
  constructor(private HttpClient: HttpClient) { }
  getPharmaciesList() : Observable<Pharmacien[]>{
    return this.HttpClient.get<Pharmacien[]>(this.baseURL);
  }
  createPharmacie(pharmacie: Pharmacien): Observable<Object>{
    return this.HttpClient.post(this.baseURL, pharmacie);
  }
  updatePharmacie(ice: number, pharmacie: Pharmacien): Observable<Object>{
    return this.HttpClient.put(this.baseURL +'/'+ ice, pharmacie);
  }
  getPharmacieByICE(ice: number): Observable<Pharmacien>{
    return this.HttpClient.get<Pharmacien>(this.baseURL +'/'+ ice);
  }
  deletePharmacie(ice: number): Observable<Object>{
    return this.HttpClient.delete(this.baseURL +'/'+ ice);
  }
}
