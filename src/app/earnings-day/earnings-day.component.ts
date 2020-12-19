import { EarningsDayService } from './earnings-day.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earnings-day',
  templateUrl: './earnings-day.component.html',
  styleUrls: ['./earnings-day.component.sass']
})
export class EarningsDayComponent implements OnInit {

  constructor(private service: EarningsDayService) { }

  ngOnInit(): void {
    this.service.get().subscribe(x => {
      console.log(x)
    })
  }

}
