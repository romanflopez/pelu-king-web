import { PaymentsService } from './payments.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

export interface PaymentModel {
  barberId: string
  startDate: Date
  endDate: Date
  percentage: number
}
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentList: any
  barberList: any
  placeholder: any = {
    startDate: moment().startOf('month').format('YYYY-MM-DD'),
    endDate: moment().endOf('month').format("YYYY-MM-DD"),
  }
  model: PaymentModel = { barberId: '', startDate: this.placeholder.startDate, endDate: this.placeholder.endDate, percentage: 0 }
  toPay: number = 0
  totalWin: number = 0
  constructor(private service: PaymentsService) { }

  ngOnInit(): void {
    // this.get()
    this.getBarbers()
  }

  get() {
    this.service.getEarnings().subscribe(x => {
      this.paymentList = x
    })
  }

  getBarbers() {
    this.service.getBarbers().subscribe(x => {
      this.barberList = x
    })
  }
  onDateSelected(e) {
    const formatDate = 'YYYY-MM-DD'
    let startDate = e.startDate.format(formatDate)
    let endDate = e.endDate.format(formatDate)
    this.model.startDate = startDate
    this.model.endDate = endDate
  }

  search() {
    this.model.percentage = 0
    this.service.getEarnings(this.model).subscribe((x: any) => {
      this.paymentList = x
      this.totalWin = x.earningsWithServices
    })
  }
  calculate() {
    if (this.totalWin > 0 && this.model.percentage > 0) {
      this.toPay = +(((this.totalWin * this.model.percentage) / 100)).toFixed(0)
    }
  }

}
