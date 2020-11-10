import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EarningService {
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

  getTotalService(data?): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/offices', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }

  getTotalProducs(data?): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/offices', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }

}
