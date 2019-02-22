import { Component } from '@angular/core';

import { Product } from '../product.model';
import { products } from '../product-list';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'wsh-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  public products: Array<Product> = [];
  public selectedTag = '';

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  public filterTagChangedHandler(tag) {
    this.selectedTag = tag;
  }

  public productClickHandler(prod: Product) {
    console.log(prod);
  }
}
