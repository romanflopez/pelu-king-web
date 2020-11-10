import { EarningService } from './earning.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earning-list',
  templateUrl: './earning-list.component.html',
  styleUrls: ['./earning-list.component.css']
})
export class EarningListComponent implements OnInit {

  constructor(private earningService: EarningService) { }
  model: any = { officeId: '', total: 0 }
  officeList: any[] = []

  ngOnInit(): void {
    this.getOffice()
  }


  getOffice() {
    this.earningService.getOffices().subscribe(x => {
      this.officeList = x
    })
  }



  calculateTotal() {

  }

  search() {

  }
}
