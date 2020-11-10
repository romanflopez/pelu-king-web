import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/expenses', { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  deleteExpense(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/expense/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  saveExpense(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/expense', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
}
