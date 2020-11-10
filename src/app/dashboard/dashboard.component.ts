import { Observable, forkJoin } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts: any
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    forkJoin(this.dashboardService.getBarberCount(), this.dashboardService.getOfficeCount(), this.dashboardService.getProductCount(), this.dashboardService.getServiceCount(), this.dashboardService.getClientCount(), this.dashboardService.getExpensesCount()).pipe(map(x => {
      return { barberCount: x[0].count, officeCount: x[1].count, productCount: x[2].count, serviceCount: x[3].count, clientCount: x[4].count, expenseCount: x[5].count }
    }))
      .subscribe(x => {
        this.counts = x
      })
  }

}
