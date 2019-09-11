import { Component } from '@angular/core';

import { Product } from './product/product.model';
import { ProductApiService } from '../core/services/product.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { LoadProduct } from './actions/product.actions';

@Component({
  selector: 'wsh-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
  public products$: Observable<Array<Product>>;
  public selectedTag = '';

  constructor(private store: Store<any>, private router: Router) {
    this.products$ = this.store.pipe(
      map(state => state.productState.products),
      distinctUntilChanged()
    );

    this.store.dispatch(new LoadProduct());
  }

  public filterTagChangedHandler(tag) {
    this.selectedTag = tag;
  }

  public productClickHandler(prod: Product) {
    this.router.navigate(['product-list', prod.id]);
  }
}
