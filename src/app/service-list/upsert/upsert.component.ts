import { SnackbarService } from './../../shared-services/snackbar.service';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.sass']
})
export class ServiceUpsertComponent implements OnInit {
  model: any = { name: '', price: '' }
  id: string
  constructor(private serviceService: ServiceService, private arouter: ActivatedRoute, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
    if (this.id) {
      this.serviceService.getServiceById(this.id).subscribe(x => {
        this.model.name = x.name
        this.model.price = x.price
      })
    }
  }


  upsert() {
    if (this.id) {
      this.editService()
    } else {
      this.saveService()
    }
  }

  saveService() {
    this.serviceService.saveService(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se agrego el servicio con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/service-list')
  }




  editService() {
    this.serviceService.editService(this.model, this.id).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se edito el servicio con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/service-list')

  }
}
