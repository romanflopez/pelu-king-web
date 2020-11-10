import { SnackbarService } from './../../shared-services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.sass']
})
export class ProductUpsertComponent implements OnInit {
  model: any = { name: '', price: '' }
  id: string
  constructor(private productService: ProductService, private arouter: ActivatedRoute, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id') ? this.arouter.snapshot.paramMap.get('id') : undefined
    if (this.id) {
      this.productService.getProductById(this.id).subscribe(x => {
        this.model.name = x.name
        this.model.price = x.price
      })
    }
  }

  upsert() {
    if (this.id) {
      this.editProduct()
    } else {
      this.saveProduct()
    }
  }
  saveProduct() {
    this.productService.saveProduct(this.model).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se agrego el producto con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/product-list')
  }

  editProduct() {
    this.productService.editProduct(this.model, this.id).subscribe(x => {
      if (x.id) {
        this.snackbarService.showSnackbar('Se edito el producto con exito', 'add-client-snackbar')
      }
    },
      _ => {
        this.snackbarService.showSnackbar('Ocurrio un error', 'add-client-snackbar')
      })
    this.router.navigateByUrl('/product-list')
  }
}
