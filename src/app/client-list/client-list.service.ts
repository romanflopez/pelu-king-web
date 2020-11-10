import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getClients(page: number): Observable<any> {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + '/clients' + `/?page=${page}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }

  deleteClient(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.delete(this.URL + `/delete/client/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  saveClient(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.post(this.URL + '/new/client', model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }
  getClientById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/clientbyid/${id}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  editClient(model: any, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return this.http.put(this.URL + `/edit/client/${id}`, model, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

  filterBy(search: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'

    });
    return this.http.get(this.URL + `/${search}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))
  }

}
