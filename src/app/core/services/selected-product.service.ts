import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './../../product-list/product/product.model';

@Injectable({
    providedIn: 'root'
})
export class SelectedProductService {

    private selectedProductSubj$: BehaviorSubject<Product> = new BehaviorSubject(null); 

    selectedProduct$: Observable<Product> = this.selectedProductSubj$.asObservable();

    changeSelectedProduct(p: Product) {
        this.selectedProductSubj$.next(p);
    }
}