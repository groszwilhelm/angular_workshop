import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../core/services/product.service';
import { Product } from '../product/product.model';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <p> Product details </p>
    <pre>
      {{ product | json }}
    </pre>
  `
})
export class ProductDetailsComponent {
  public product = null;

  constructor(private productService: ProductApiService) {
  }
}
