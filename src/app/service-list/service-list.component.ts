import { SnackbarService } from './../shared-services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass']
})
export class ServiceListComponent implements OnInit {


  services: Array<any> = []
  constructor(private serviceService: ServiceService, private router: Router,
    private dialog: MatDialog, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(x => [
      this.services = x
    ])
  }
  onEditService(id: string) {
    this.router.navigateByUrl(`service/edit/${id}`)
  }
  addService() {
    this.router.navigateByUrl('service/add')
  }

  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteService(id, index, name)
      }

    });
  }

  deleteService(id: string, index: number, name: string) {
    this.serviceService.deleteService(id).subscribe(x => {
      if (x.status) {
        if (this.services.indexOf(this.services[index]) == index) {
          this.services.splice(index, 1)
          const msg = 'Se borro el servicio ' + name
          this.snackbarService.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.snackbarService.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }

}
