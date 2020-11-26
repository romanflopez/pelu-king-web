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

  getTotalServices(data?): Observable<any> {
    let url
    if (data) {
      url = `/earnings/services?startDate=${data.startDate}&endDate=${data.endDate}&barberId=${data.barberId}&officeId=all`
    } else {
      url = '/earnings/services?startDate=all&&endDate=all&barberId=all&officeId=all'
    }

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + url, { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }

  getTotalProducts(data?): Observable<any> {
    let url
    if (data) {
      url = `/earnings/products?startDate=${data.startDate}&endDate=${data.endDate}&barberId=${data.barberId}&officeId=all`
    } else {
      url = '/earnings/products?startDate=all&&endDate=all&barberId=all&officeId=all'
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

  getTotalCut(): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/count/payment', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  getTotalEarningsNoFilter(data?) {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/earnings/date?startDate=all&endDate=all&barberId=all&officeId=all&paymentMethod=all', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
  getTotalEarningBy(model) {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + `/earnings/date?startDate=${model.startDate}&endDate=${model.endDate}&barberId=${model.barberId}&officeId=${model.officeId}&paymentMethod=${model.paymentMethod}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
}
