import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserLoggedStatusService } from 'src/app/user-logged-status.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLogged: boolean = false
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  fillerNav: Array<any> = [{ name: 'Dashboard', link: '/dashboard', roles: ['ADMIN', "MODERATOR"] }, { name: 'Clientes', link: '/client-list', roles: ['ADMIN'] }, { name: 'Barberos', link: '/barber-list', roles: ['ADMIN'] }, { name: 'Productos', link: '/product-list', roles: ['ADMIN'] }, { name: 'Servicios', link: '/service-list', roles: ['ADMIN'] }, { name: 'Sucursales', link: '/office-list', roles: ['ADMIN'] }, { name: 'Gastos', link: '/expenses-list', roles: ['ADMIN'] }]
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private localStorageService: LocalStorageService, private userLoggedStatus: UserLoggedStatusService) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.isLogged = this.localStorageService.isAuthenticated()

    this.userLoggedStatus.userLoggedIn$.subscribe(x => {
      this.isLogged = true
    })
    this.userLoggedStatus.userLoggedOut$.subscribe(x => {
      this.isLogged = false
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
