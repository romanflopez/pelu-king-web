import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

import { DeleteDialogComponent } from '../shared-components/delete-dialog/delete-dialog.component';
import { SnackbarService } from '../shared-services/snackbar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = []
  constructor(private productServices: ProductService, private router: Router, private dialog: MatDialog,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe(x => {
      this.products = x
    })
  }
  onEditProduct(id: string) {
    this.router.navigateByUrl(`product/edit/${id}`)
  }

  addProduct() {
    this.router.navigateByUrl(`product/add`)
  }
  openDialog(name: string, id: string, index: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '455px',
      height: '331px',
      data: { name, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(id, index, name)
      }

    });
  }

  deleteProduct(id: string, index: number, name: string) {
    this.productServices.deleteProduct(id).subscribe(x => {
      if (x.status) {
        if (this.products.indexOf(this.products[index]) == index) {
          this.products.splice(index, 1)
          const msg = 'Se borro el producto ' + name
          this.snackbarService.showSnackbar(msg, 'delete-client-snackbar')
        }
      }
    }, _ => {
      this.snackbarService.showSnackbar('Ocurrio un error', 'error-client-snackbar')
    })
  }
}
