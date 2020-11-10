import { SnackbarService } from './../../shared-services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BarberListService } from '../barber-list.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.sass']
})
export class BarberUpsertComponent implements OnInit {
  model: any = { name: '', surname: '' }
  id: string
  constructor(private barberService: BarberListService, private arouter: ActivatedRoute, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {

    this.id = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
    if (this.id) {
      this.barberService.getBarberById(this.id).subscribe(x => {
        this.model.name = x.name
        this.model.surname = x.surname
      })
    }

  }
  upsert() {
    if (this.id) {
      this.editBarber()
    } else {
      this.saveBarber()
    }

  }

  private saveBarber() {
    this.barberService.saveBarber(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se agrego barbero con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/barber-list')
  }
  private editBarber() {
    this.barberService.editBarber(this.model, this.id).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se edito barbero con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/barber-list')
  }


}

