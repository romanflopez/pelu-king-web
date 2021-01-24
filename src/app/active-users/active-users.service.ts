import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {
  private URL = environment.apiUrl
  constructor(private http: HttpClient) { }

  getActiveUsers(startDate, endDate) {
    let url
    url = `/payments/clientsLastMonths?startMonth=${startDate}&endMonth=${endDate}`

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + url, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
