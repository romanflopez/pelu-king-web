import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './upsert/upsert.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/products', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
  saveProduct(model: Product): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/product', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  deleteProduct(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/product/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getProductById(id: string): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/productbyid/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  editProduct(model: Product, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.put(this.URL + `/edit/product/${id}`, model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
