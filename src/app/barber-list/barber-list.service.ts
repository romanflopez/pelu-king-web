import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarberListService {
  private URL = environment.apiUrl
  constructor(private http: HttpClient) { }

  getBarbers(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/barbers', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }


  saveBarber(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/barber', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getBarberById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/barberbyid/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  editBarber(model: any, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.put(this.URL + `/edit/barber/${id}`, model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  deleteBarber(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/barber/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
