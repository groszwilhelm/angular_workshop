import { Component, OnInit, Input } from '@angular/core';
import { ProductApiService } from './../../core/services/product.service';

@Component({
    selector: 'wsh-product-details',
    templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent{

    constructor(public productsService: ProductApiService) {}
}