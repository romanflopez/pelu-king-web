import { SnackbarService } from './../shared-services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from './expense.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';
import * as moment from 'moment'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Array<any> = []
  placeholder: any = {
    startDate: moment().startOf('month').format('DD-MM-YYYY'),
    endDate: moment().endOf('month').format("DD-MM-YYYY"),
  }

  constructor(private expenseService: ExpenseService, private router: Router, private dialog: MatDialog, private snackBarService: SnackbarService) { }

  ngOnInit(): void {

    this.expenseService.getExpenses().pipe(map(x => x.expenses.docs)).subscribe(x => {
      this.expenses = x
    })
  }
  onDateSelected(e) {
    console.log(e)
  }

  addExpense() {
    this.router.navigateByUrl('expense/add')
  }

  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteExpense(id, index, name)
      }

    });
  }

  deleteExpense(id: string, index: number, name: string) {
    this.expenseService.deleteExpense(id).subscribe(x => {
      if (x.status) {
        if (this.expenses.indexOf(this.expenses[index]) == index) {
          this.expenses.splice(index, 1)
          const msg = 'Se borro el cliente ' + name
          this.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }

  showSnackbar(msg: string, class_css: string) {
    this.snackBarService.showSnackbar(msg, class_css);
  }

  selectionChanged(e) {
    console.log(e)
  }

}
