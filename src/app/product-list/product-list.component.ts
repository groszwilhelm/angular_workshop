import { Component } from '@angular/core';

import { Product } from './product/product.model';
import { ProductApiService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsh-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  public products: Array<Product> = [];
  public selectedTag = '';

  constructor(private productService: ProductApiService, private router: Router) {
  }

  public filterTagChangedHandler(tag) {
    this.selectedTag = tag;
  }

  public productClickHandler(prod: Product) {
    this.router.navigate(['product-list', prod.id]);
  }
}
