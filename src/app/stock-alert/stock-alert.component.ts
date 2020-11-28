import { Component, Input } from '@angular/core';
import { StockModel } from '../model/models.model';

@Component({
  selector: 'app-stock-alert',
  templateUrl: './stock-alert.component.html',
  styleUrls: ['./stock-alert.component.css']
})
export class StockAlertComponent {
  @Input() stockList: StockModel[]

  constructor() { }



}
