import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../product-list/product/product.model';

@Component({
    selector: 'wsh-product-details',
    templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent{
    @Input()
    product: Product
}