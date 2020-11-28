import { Component, Input, OnInit } from '@angular/core';
import { StockModel } from '../model/models.model';

@Component({
  selector: 'app-stock-row',
  templateUrl: './stock-row.component.html',
  styleUrls: ['./stock-row.component.sass']
})
export class StockRowComponent {
  @Input() stock: StockModel
  constructor() { }



}
