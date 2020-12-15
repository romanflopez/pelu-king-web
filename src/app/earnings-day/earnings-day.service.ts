import { AuthServiceService } from './../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EarningsDayService {
  private URL = environment.apiUrl

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  public get(): Observable<any> {
    const currentUSer = this.auth.getOfficeName()
    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.get(this.URL + `/earnings/today/${currentUSer}`, { headers }).pipe(
      catchError((error) => {
        throw error
      }))

  }
}
