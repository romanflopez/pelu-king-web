import { UserLoggedStatusService } from './user-logged-status.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private userLoggedStatus: UserLoggedStatusService) { }


  logOut() {
    localStorage.clear()
    this.userLoggedStatus.userLoggedOutSource.next()
  }

}
