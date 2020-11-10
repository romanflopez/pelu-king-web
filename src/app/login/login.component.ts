import { AuthServiceService } from './../auth.service';
import { LocalStorageService } from './../local-storage.service';
import { LoginService } from './login.service';
import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: UserModel = { user: '', password: '' }

  error: string
  handleError: boolean = false
  constructor(private loginService: LoginService, private localStorageService: LocalStorageService, private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.logOut()
  }

  public onLoginSubmit(): void {
    this.handleError = false
    this.loginService.login(this.userModel).subscribe(x => {
      if (x) {
        this.localStorageService.setUserData(x)
        this.router.navigateByUrl('dashboard')
      }

    },
      err => {
        this.handleError = true
        this.error = err.error
      })
  }
}
