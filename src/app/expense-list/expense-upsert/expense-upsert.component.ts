import { Router } from '@angular/router';
import { SnackbarService } from './../../shared-services/snackbar.service';
import { ExpenseService } from './../expense.service';
import { Component, OnInit } from '@angular/core';
export interface Expense {
  name: string
  price: number
}
@Component({
  selector: 'app-expense-upsert',
  templateUrl: './expense-upsert.component.html',
  styleUrls: ['./expense-upsert.component.scss']
})
export class ExpenseUpsertComponent implements OnInit {
  model: Expense = { name: '', price: null }
  constructor(private expenseService: ExpenseService, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
  }
  saveExpense() {
    this.expenseService.saveExpense(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Gasto agregado con exito', 'delete-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/expenses-list')
  }

}