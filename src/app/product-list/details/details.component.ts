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

  constructor(private route: ActivatedRoute, private productService: ProductApiService) {
    this.productService.getProducts()
      .pipe(
        map(products => products
          .find(product => product.id === this.route.snapshot.params.id)
        )
      )
      .subscribe(product => this.setProduct(product));
  }

  private setProduct(product: Product) {
    this.product = product;
  }
}
