import { EarningService } from './earning.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
export interface Earnings {
  totalAmount: number
  paymentAmount: number
  expenseAmount: number
}
export interface TotalService {
  servicesCount: number
  servicesEarnings: number
}
export interface TotalProdcut {
  productCount: number
  productEarnings: number
}
@Component({
  selector: 'app-earning-list',
  templateUrl: './earning-list.component.html',
  styleUrls: ['./earning-list.component.css']
})

export class EarningListComponent implements OnInit {

  constructor(private earningService: EarningService) { }
  placeholder: any = {
    startDate: moment().startOf('month').format('YYYY-MM-DD'),
    endDate: moment().endOf('month').format("YYYY-MM-DD"),
  }
  earnings: Earnings = { totalAmount: 0, paymentAmount: 0, expenseAmount: 0 }
  totalService: TotalService = { servicesCount: null, servicesEarnings: null }
  totalProduct: TotalProdcut = { productCount: null, productEarnings: null }
  model: any = { officeId: 'all', barberId: 'all', paymentMethod: 'all', startDate: this.placeholder.startDate, endDate: this.placeholder.endDate }
  officeList: any[] = []
  barberList: any[] = []
  totalCut: any[] = []

  CASH = 'CASH'
  CARD = 'CARD'
  paymentMethod = [{ name: 'Efectivo', value: this.CASH }, { name: 'Tarjeta', value: this.CARD }]
  ngOnInit(): void {
    this.getOffice()
    this.getTotalCut()
    this.getBarberList()
    this.getTotalService()
    this.getTotalProducts()
    this.calculateTotal()
  }


  getOffice() {
    this.earningService.getOffices().subscribe(x => {
      this.officeList = x
    })
  }

  getTotalCut() {
    this.earningService.getTotalCut().subscribe(x => {
      this.totalCut = x.count
    })
  }
  getBarberList() {
    this.earningService.getBarbers().subscribe(x => {
      this.barberList = x
    })

  }

  getTotalService() {
    this.earningService.getTotalServices().subscribe((x: TotalService) => {
      this.setTotalService(x)
    })
  }
  getTotalProducts() {
    this.earningService.getTotalProducts().subscribe((x: TotalProdcut) => {
      this.setTotalProduct(x)
    })
  }
  calculateTotal() {
    this.earningService.getTotalEarningsNoFilter().subscribe((x: Earnings) => {
      this.earnings = x
    })
  }

  search() {
    this.earningService.getTotalEarningBy(this.model).subscribe((x: Earnings) => {
      this.earnings.expenseAmount = x.expenseAmount
      this.earnings.paymentAmount = x.paymentAmount
      this.earnings.totalAmount = x.totalAmount
    })
    this.getTotals()
  }

  onDateSelected(e) {
    const formatDate = 'YYYY-MM-DD'
    let startDate = e.startDate.format(formatDate)
    let endDate = e.endDate.format(formatDate)
    this.model.startDate = startDate
    this.model.endDate = endDate
  }

  private setTotalProduct(totalProduct: TotalProdcut) {
    this.totalProduct.productCount = totalProduct.productCount
    this.totalProduct.productEarnings = totalProduct.productEarnings
  }
  private setTotalService(totalService: TotalService) {
    this.totalService.servicesCount = totalService.servicesCount
    this.totalService.servicesEarnings = totalService.servicesEarnings
  }

  getTotals() {
    this.earningService.getTotalProducts({ startDate: this.model.startDate, endDate: this.model.endDate, barberId: this.model.barberId, officeId: this.model.officeId, paymentMethod: this.model.paymentMethod }).subscribe((x: TotalProdcut) => {
      this.setTotalProduct(x)
    })
    this.earningService.getTotalServices({ startDate: this.model.startDate, endDate: this.model.endDate, barberId: this.model.barberId, officeId: this.model.officeId, paymentMethod: this.model.paymentMethod }).subscribe((x: TotalService) => {
      this.setTotalService(x)
    })

  }
}
