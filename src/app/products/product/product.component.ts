import { Component, Input, EventEmitter, Output, HostBinding, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  public product: Product;

  @Output()
  public clicked$ = new EventEmitter();

  constructor() {
  }

  public buttonClickHandler(): void {
    this.clicked$.emit(this.product);
  }
}
