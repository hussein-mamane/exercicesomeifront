import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$! : Observable<Product[]>
  URL = "http://localhost:5139/api/Product";
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'})
  };
  getProduct(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.get<Product>(url);
  }

  getAllProducts() {
    this.products$ = this.http.get<Product[]>(this.URL,).pipe(tap(_=>console.log(_[0])))
    this.products$.subscribe(value => console.log(value))
    return this.products$
  }

}
