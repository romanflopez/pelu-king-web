import { Product, Service } from './../../client-list/add-cut/add-cut.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cut-summary',
  templateUrl: './cut-summary.component.html',
  styleUrls: ['./cut-summary.component.css']
})
export class CutSummaryComponent implements OnInit {
  @Input() productList: Array<Product>
  @Input() serviceList: Array<Service>
  @Input() total: number

  constructor() { }

  ngOnInit(): void {

  }

}
