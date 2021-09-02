import { Pharmacien } from './../classes/pharmacien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {
  private baseURL = "http://localhost:8080/api/v1/pharmaciens";
  constructor(private HttpClient: HttpClient) { }
  getPharmaciensList() : Observable<Pharmacien[]>{
    return this.HttpClient.get<Pharmacien[]>(this.baseURL);
  }
  createPharmacien(pharmacien: Pharmacien): Observable<Object>{
    return this.HttpClient.post(this.baseURL, pharmacien);
  }
  updatePharmacien(id: number, pharmacien: Pharmacien): Observable<Object>{
    return this.HttpClient.put(this.baseURL +'/'+ id, pharmacien);
  }
  getPharmacienByID(id: number): Observable<Pharmacien>{
    return this.HttpClient.get<Pharmacien>(this.baseURL +'/'+ id);
  }
  deletePharmacien(id: number): Observable<Object>{
    return this.HttpClient.delete(this.baseURL +'/'+ id);
  }
}
