import { UserLoggedStatusService } from './user-logged-status.service';
import { LocalStorageService } from './local-storage.service';
import { AuthServiceService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private userLoggedStatus: UserLoggedStatusService, private router: Router) {
    this.userLoggedStatus.userLoggedOut$.subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.localStorageService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('login')
      return false
    }

  }

}
