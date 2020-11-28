import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.sass']
})
export class DashboardCardComponent implements OnInit {
  @Input() route: string
  @Input() iconSrc: string
  @Input() title: string
  @Input() total: string

  constructor() { }

  ngOnInit(): void {
  }

}
