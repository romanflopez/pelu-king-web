import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeletePaymentsService {
  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }



  deletePayment(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/payment/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getPayments(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/payments/todays', { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
}
