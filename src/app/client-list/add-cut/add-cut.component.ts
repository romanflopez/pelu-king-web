import { SnackbarService } from './../../shared-services/snackbar.service';
import { AddCutService } from './add-cut.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface AddCutModel {
  clientId: string
  barberId: string
  officeId: string
  services: Array<Service>
  products: Array<Product>
  paymentMethod: string
}

export interface Service {
  _id: string
  name: string
  price: number
}
export interface Product {
  _id: string
  name: string
  price: number
}
export interface Barber {
  _id: string
  name: string
  suername: number
}
export interface Office {
  _id: string
  name: string
}
@Component({
  selector: 'app-add-cut',
  templateUrl: './add-cut.component.html',
  styleUrls: ['./add-cut.component.css']
})
export class AddCutComponent implements OnInit {
  public serviceList: Array<Service>
  public productList: Array<Product>
  public barberList: Array<Barber>
  public officeList: Array<Office>
  CASH = 'CASH'
  CARD = 'CARD'
  public model: AddCutModel = { clientId: '', barberId: '', officeId: '', services: [], products: [], paymentMethod: '' }
  paymentMethod = [this.CARD, this.CASH]

  constructor(private arouter: ActivatedRoute, private addCutService: AddCutService, private snackService: SnackbarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getServices()
    this.getProducts()
    this.getBarbers()
    this.getOffices()
    this.model.clientId = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
  }

  private getServices() {
    this.addCutService.getServices().subscribe((x: Array<Service>) => {
      this.serviceList = x
    })

  }

  private getProducts() {
    this.addCutService.getProducts().subscribe((x: Array<Product>) => {
      this.productList = x
    })
  }
  private getBarbers() {
    this.addCutService.getBarbers().subscribe((x: Array<Barber>) => {
      this.barberList = x
    })
  }

  private getOffices() {
    this.addCutService.getOffices().subscribe((x: Array<Office>) => {
      this.officeList = x
    })
  }

  public calculateTotalService(): number {
    return this.model.services.map(x => { return x.price }).reduce((contador, serviceValue) => { return contador + serviceValue }, 0);

  }

  public calculateTotalProducts(): number {
    return this.model.products.map(x => { return x.price }).reduce((total, producto) => { return total + producto }, 0)
  }
  public calculateTotal(): number {
    return this.calculateTotalProducts() + this.calculateTotalService()
  }

  public saveCut() {
    this.addCutService.saveCut(this.model).subscribe(x => {
      if (x.id) {
        this.snackService.showSnackbar('Se agrego el corte con exito', 'add-client-snackbar')
      }
    }, err => {
      this.snackService.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
    this.router.navigateByUrl('client-list')

  }

}
