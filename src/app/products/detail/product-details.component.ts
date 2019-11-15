import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wsh-product-details',
    templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    @Input()
    product: Product
}