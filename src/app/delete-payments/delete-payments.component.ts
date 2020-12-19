import { DeletePaymentsService } from './delete-payments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-delete-payments',
  templateUrl: './delete-payments.component.html',
  styleUrls: ['./delete-payments.component.css']
})
export class DeletePaymentsComponent implements OnInit {
  paymentList: any = []
  constructor(public dialog: MatDialog, private service: DeletePaymentsService) { }

  ngOnInit(): void {
    this.get()
  }


  get() {
    this.service.getPayments().subscribe((x: any) => {
      this.paymentList = x
    })
  }
  openDialog(id: string, name: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name: `el pago de ${name}`, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deletePayment(id).subscribe(x => {
          this.get()
        })
      }

    });
  }

}
