import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-summary-dialog-product',
  templateUrl: './summary-dialog-product.component.html',
  styleUrls: ['./summary-dialog-product.component.sass']
})
export class SummaryDialogProductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SummaryDialogProductComponent>) { }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close()
  }
}
