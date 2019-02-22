import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'wsh-product',
  templateUrl: 'product.component.html'
})
export class ProductComponent {
  @Input() product: Product;
  @Output() clicked$ = new EventEmitter();

  public moreDetailsClickHandler(event): void {
    this.clicked$.next(this.product);
  }
}
