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

  countAll(): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.get(this.URL + '/count/all', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
