import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product.interface';
import { ListService } from '../list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  public products: Array<Product>;

  constructor(private productsService: ListService) {
    this.products = productsService.getProducts();
  }

  public handleClickEvent(event: boolean): void {
    console.log('Ola');
  }
}
