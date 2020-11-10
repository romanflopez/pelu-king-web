import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedStatusService {
  userLoggedInSource = new Subject<any>()
  userLoggedIn$ = this.userLoggedInSource.asObservable()
  userLoggedOutSource = new Subject<any>()
  userLoggedOut$ = this.userLoggedOutSource.asObservable()
  constructor() { }
}
