import { DashboardService } from './../dashboard/dashboard.service';
import { ActiveUsersService } from './active-users.service';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  totalActiveUsers$: Observable<any>
  countAll$: Observable<any>
  totalPasiveUsers: number
  totalCount: number
  placeholder: any = {
    startDate: moment().startOf('month').format('YYYY-MM-DD'),
    endDate: moment().endOf('month').format("YYYY-MM-DD"),
  }
  constructor(private service: ActiveUsersService, private dashboardService: DashboardService) { }



  onDateSelected(event) {

    let startMoth = event.startDate.format("YYYY-MM-DD")
    let endMonth = event.endDate.format("YYYY-MM-DD")
    this.totalActiveUsers$ = this.service.getActiveUsers(startMoth, endMonth)
    this.countAll$ = this.dashboardService.countAll()
    forkJoin(this.totalActiveUsers$, this.countAll$)
      .subscribe((x: any) => {
        console.log(x)
        this.totalCount = x[0].clientsCount
        this.totalPasiveUsers = x[1].clientsCount - this.totalCount
      })
  }
}
