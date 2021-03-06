import { SnackbarService } from './../../shared-services/snackbar.service';
import { ClientListService } from './../client-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.css']
})
export class ClientUpsertComponent implements OnInit {
  currentRol = JSON.parse(localStorage.getItem('user_data')).role[0]
  model: any = { name: '', surname: '', phone: '', email: '', dateOfBirth: '' }
  id: string
  constructor(private clientService: ClientListService, private arouter: ActivatedRoute, public location: Location,
    private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
    if (this.id) {
      this.clientService.getClientById(this.id).subscribe(x => {
        this.model.name = x.name
        this.model.surname = x.surname
        this.model.phone = x.phone
        this.model.email = x.email
        this.model.dateOfBirth = x.dateOfBirth
      })
    }

  }
  upsert() {
    if (this.id) {
      this.editClient()
    } else {
      this.saveClient()
    }
    this.router.navigateByUrl('/client-list')
  }

  private saveClient() {
    this.clientService.saveClient(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se agrego cliente con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
  }
  private editClient() {
    this.clientService.editClient(this.model, this.id).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se edito con exito', 'add-client-snackbar')

      }
    }, err => {
      this.snackbarService.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }

}
