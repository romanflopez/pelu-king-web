import { Injectable } from '@angular/core';
import { Service, AddCutModel } from './add-cut.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCutService {

  private URL = environment.apiUrl
  constructor(private http: HttpClient) { }


  getServices(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/services', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }

  getProducts(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/products', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
  getOffices(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/offices', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }


  getBarbers(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/barbers', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }


  saveCut(model: AddCutModel): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/payment', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
