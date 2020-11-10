import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.sass']
})
export class BackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }

}
