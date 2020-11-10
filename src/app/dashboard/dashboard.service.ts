import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getBarberCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/barber', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getProductCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/product', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getServiceCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/service', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getOfficeCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/office', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getExpensesCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/expense', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getClientCount(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/client', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
