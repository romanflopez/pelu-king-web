import { SnackbarService } from './../shared-services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OfficeService } from './office.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.sass']
})
export class OfficeListComponent implements OnInit {

  offices: Array<any>
  constructor(private officesServices: OfficeService, private router: Router, private dialog: MatDialog, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.officesServices.getOffices().subscribe(x => {
      this.offices = x
    })
  }

  onEditOffice(id: string) {
    this.router.navigateByUrl(`office/edit/${id}`)
  }

  addOffice() {
    this.router.navigateByUrl('office/add')
  }

  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOffice(id, index, name)
      }

    });
  }

  deleteOffice(id: string, index: number, name: string) {
    this.officesServices.deleteOffice(id).subscribe(x => {
      if (x.status) {
        if (this.offices.indexOf(this.offices[index]) == index) {
          this.offices.splice(index, 1)
          const msg = 'Se borro el servicio ' + name
          this.snackbarService.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.snackbarService.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }
}
