import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.baseUrl);
  }

  getSingle(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
