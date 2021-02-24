import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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
  saveService(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/service', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  deleteService(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/service/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getServiceById(id: string): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/servicebyid/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  editService(model: any, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.put(this.URL + `/edit/service/${id}`, model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
