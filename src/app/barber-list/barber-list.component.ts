import { SnackbarService } from './../shared-services/snackbar.service';
import { DeleteDialogComponent } from './../shared-components/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { BarberListService } from './barber-list.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-barber-list',
  templateUrl: './barber-list.component.html',
  styleUrls: ['./barber-list.component.css']
})
export class BarberListComponent implements OnInit {
  barbers: Array<any>
  constructor(private barberService: BarberListService, private router: Router, public dialog: MatDialog, private showSnackbar: SnackbarService) { }

  ngOnInit(): void {
    this.barberService.getBarbers().subscribe(x => {
      this.barbers = x
    })
  }
  onEditBarber(id: string) {
    this.router.navigateByUrl(`barber/edit/${id}`)
  }
  addBarber() {
    this.router.navigateByUrl('/barber/add')
  }

  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBarber(id, index)
      }

    });
  }

  deleteBarber(id: string, index: number) {
    this.barberService.deleteBarber(id).subscribe(x => {
      if (x.status) {
        if (this.barbers.indexOf(this.barbers[index]) == index) {
          this.barbers.splice(index, 1)
          const msg = 'Se borro barbero ' + name
          this.showSnackbar.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.showSnackbar.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })




  }
}
