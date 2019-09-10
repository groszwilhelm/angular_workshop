import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products: Array<Product>;

  constructor(private productsService: ProductsService, private ngz: NgZone, private cd: ChangeDetectorRef) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
    this.ngz.runOutsideAngular(() => {
      setTimeout(() => {
        this.products.push(...this.products);
        this.cd.detectChanges();
      }, 2000);
    });
  }

  public productClickHandler(product): void {
    console.log({ product });
  }
}
