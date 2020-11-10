import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getOffices(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/offices', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
  saveOffice(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/office', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  deleteOffice(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/office/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getOfficeById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/officebyid/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  editOffice(model: any, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.put(this.URL + `/edit/office/${id}`, model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
