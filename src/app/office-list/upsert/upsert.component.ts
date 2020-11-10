import { SnackbarService } from './../../shared-services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from './../office.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.sass']
})
export class OfficeUpsertComponent implements OnInit {
  model: any = { name: '' }
  id: string
  constructor(private officeService: OfficeService, private arouter: ActivatedRoute, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
    if (this.id) {
      this.officeService.getOfficeById(this.id).subscribe(x => {
        this.model.name = x.name

      })
    }
  }

  upsert() {
    if (this.id) {
      this.editOffice()
    } else {
      this.saveOffice()
    }

  }
  saveOffice() {
    this.officeService.saveOffice(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se  agrego barberia con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/office-list')
  }

  private editOffice() {
    this.officeService.editOffice(this.model, this.id).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se  edito barberia con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/office-list')
  }
}
