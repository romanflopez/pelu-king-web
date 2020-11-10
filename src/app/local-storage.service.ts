import { USER_DATA } from './../../constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem(USER_DATA))
    if (!user) {
      return false
    } else {
      return true
    }

  }

  public setUserData(userData: any): void {
    localStorage.setItem(USER_DATA, JSON.stringify(userData))
  }

  public getUsername(): string {
    return JSON.parse(localStorage.getItem(USER_DATA)) ? JSON.parse(localStorage.getItem(USER_DATA)).user : undefined

  }
  public getCurrentRoles(): Array<string> {
    return JSON.parse(localStorage.getItem(USER_DATA)) ? JSON.parse(localStorage.getItem(USER_DATA)).role : undefined
  }

}