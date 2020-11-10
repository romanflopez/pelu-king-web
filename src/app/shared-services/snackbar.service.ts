import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {

  }

  public showSnackbar(msg: string, class_css: string): void {
    this.snackBar.open(msg, '', {
      duration: 1500,
      panelClass: `${class_css}`
    })
  }
}
