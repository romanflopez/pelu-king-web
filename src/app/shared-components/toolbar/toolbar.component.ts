import { AuthServiceService } from './../../auth.service';
import { UserLoggedStatusService } from './../../user-logged-status.service';
import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isAuth: boolean = false

  username: string
  constructor(private localStorageService: LocalStorageService, private userLoggedStatus: UserLoggedStatusService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isAuth = this.localStorageService.isAuthenticated()
    this.userLoggedStatus.userLoggedIn$.subscribe(x => {
      this.isAuth = true
      this.username = x
    })

    if (this.isAuth && !this.username) {
      this.username = this.localStorageService.getUsername()
    }
    this.userLoggedStatus.userLoggedOut$.subscribe(x => {
      this.isAuth = false
      this.username = undefined
    })
  }

  logOut() {
    this.authService.logOut()
  }
}
