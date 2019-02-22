import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

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

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.product = this.productService.getProducts()
      .filter(product => product.id === Number(this.route.snapshot.params.id))[0];
  }
}
