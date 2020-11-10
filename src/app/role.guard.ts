import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserRole(next, url);
  }

  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.localStorageService.isAuthenticated()) {
      const userRole = this.localStorageService.getCurrentRoles();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
