import { Component } from '@angular/core';
import { Product } from '../product.model';
import { products } from '../product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products: Array<Product> = products;

  public productClickHandler(product): void {
    console.log({ product });
  }
}
