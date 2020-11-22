import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getEarnings(data?) {
    let url
    if (data) {
      url = `/earnings/byBarber?startDate=${data.startDate}&endDate=${data.endDate}&barberId=${data.barberId}`
    } else {
      url = '/earnings/byBarber?startDate=all&endDate=all&barberId=all'
    }

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + url, { headers }).pipe(
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
}
