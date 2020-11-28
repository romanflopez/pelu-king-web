import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { CountAll } from '../model/models.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts: any
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.countAll().subscribe((x: CountAll) => {
      console.log(x)
      this.counts = x
    })
  }

}
