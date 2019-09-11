import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductApiService } from '../../core/services/product.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { LOAD_PRODUCTS, LoadProductCompleted, LoadProductError } from '../actions/product.actions';

@Injectable()
export class ProductEffect {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$
    .pipe(
      ofType(LOAD_PRODUCTS),
      switchMap(() =>
        this.productApiService.getProducts()
          .pipe(
            map(response => new LoadProductCompleted(response)),
            catchError(err => of(new LoadProductError(err)))
          )
      )
    );

  constructor(private actions$: Actions, private productApiService: ProductApiService) { }
}
