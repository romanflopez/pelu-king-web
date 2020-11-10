import { SnackbarService } from './../shared-services/snackbar.service';
import { Router } from '@angular/router';
import { ClientListService } from './client-list.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export enum TypeOfFilter {
  name = 'name',
  surname = 'surname',
  both = 'both'

}
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {
  page: any = { total: 0, currentPage: 1 }
  pageIndex: number = 1
  model: any = { typeOfFilter: '', value: '' }
  clients: Array<any>
  searchCombo: any = [{ name: 'Nombre', value: 'name' }, { name: 'Apellido', value: 'surname' }, { name: 'Nombre y apellido', value: 'both' }]
  constructor(private clientService: ClientListService, private router: Router, public dialog: MatDialog,
    private snackBarService: SnackbarService) { }

  ngOnInit(): void {
    this.getClient()
  }
  onPageChange(pageIndex: number) {
    this.page.currentPage = pageIndex + 1
    this.clientService.getClients(this.page.currentPage).pipe(map(x => x.clients)).subscribe(x => {
      this.clients = x.clients
    })

  }
  getClient() {
    this.clientService.getClients(this.page.currentPage).pipe(map(x => x.clients)).subscribe(x => {
      this.clients = x.docs
      this.page.total = x.totalDocs
      this.page.currentPage = x.page
    })
  }
  addCut(id: string) {
    this.router.navigateByUrl(`/client/add/cut/${id}`);

  }
  addClient() {
    this.router.navigateByUrl('/client/add')
  }

  onClient(id: string) {
    this.router.navigateByUrl(`client/edit/${id}`)
  }
  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteClient(id, index, name)
      }

    });
  }

  deleteClient(id: string, index: number, name: string) {
    this.clientService.deleteClient(id).subscribe(x => {
      if (x.result) {
        if (this.clients.indexOf(this.clients[index]) == index) {
          this.clients.splice(index, 1)
          const msg = 'Se borro el cliente ' + name
          this.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }

  showSnackbar(msg: string, class_css: string) {
    this.snackBarService.showSnackbar(msg, class_css);
  }
  onSearch(event) {
    this.model.value = event.target.value
  }
  search() {
    if (this.model.value == '') {
      this.getClient()
    } else {
      let wantToSearch = this.filterBy()
      this.getFiltered(wantToSearch)
    }

  }
  onTypeOfFilterSelected(event: any) {
    this.model.typeOfFilter = event.value
  }
  getFiltered(wantToSearch: string) {
    this.clientService.filterBy(wantToSearch).pipe(map(x => x.clients)).subscribe(x => {
      this.mapList(x)
    })
  }

  filterBy() {
    switch (this.model.typeOfFilter) {
      case (TypeOfFilter.name):
        return `search?name=${this.model.value}`
      case (TypeOfFilter.surname):
        return `search?surname=${this.model.value}`
      case (TypeOfFilter.both):
        return this.filterByBoth()
      default:
        this.getClient()
    }

  }
  filterByBoth(): string {
    const obj = this.model.value
    const objParsed = obj.split(/(\s+)/)
    const name = objParsed[0]
    const surname = objParsed[2] ? objParsed[2] : ''
    return `search?name=${name}&surname=${surname}`
  }

  mapList(x: any) {
    this.clients = x.docs
    this.page.total = x.totalDocs
    this.page.currentPage = x.page
  }
}
