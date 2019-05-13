import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  @HostBinding('class.col-md-4')
  public hasColumnClass = true;

  @Input()
  public product: Product;

  @Output()
  public click$ = new EventEmitter<boolean>();

  public createEvent(): void {
    this.click$
      .next(true);
  }
}
