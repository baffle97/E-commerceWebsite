import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  dataUrl: string = '../../assets/data/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    let params = new HttpParams();
    return this.http.get(`../../assets/data/products.json`);
  }
}
