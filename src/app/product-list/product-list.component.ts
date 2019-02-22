import { Component } from '@angular/core';

import { Product } from '../product.model';
import { products } from '../product-list';

@Component({
  selector: 'wsh-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  public products: Array<Product> = products;
  public selectedTag = '';

  public filterTagChangedHandler(tag) {
    this.selectedTag = tag;
  }

  public productClickHandler(prod: Product) {
    console.log(prod);
  }
}
