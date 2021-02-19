import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4000/api/v1/products')
    .pipe(map(prod => prod))
  }
  getProduct(id: number) {
    return this.http.get(`/product/${id}`);
  }
}
