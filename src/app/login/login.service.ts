import { UserLoggedStatusService } from './../user-logged-status.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = environment.apiUrl

  constructor(private http: HttpClient, private userLoggedStatus: UserLoggedStatusService) { }


  public login(userModel: UserModel) {

    const headers = new HttpHeaders({
      'content-Type': 'application/json'

    });
    return this.http.post(this.URL + '/signin', userModel, { headers }).pipe(
      tap((x: any) => {
        this.userLoggedStatus.userLoggedInSource.next(x.user)
      }),
      catchError((error) => {
        throw error
      }))


  }
}
