import { StockModel } from './../model/models.model';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { CountAll } from '../model/models.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts: CountAll
  stockList: StockModel[]
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.countAll().subscribe((x: CountAll) => {
      this.counts = x
    })
    this.dashboardService.getStock().subscribe((x: StockModel[]) => {
      this.stockList = x
    })
  }

}
