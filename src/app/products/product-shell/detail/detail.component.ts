import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Product } from '../../product.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-shell-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  products$ = this.productsService.productsWithCategories$;  
  productsNo = 0;
  product$: Observable<Product> = this.productsService.selectedProduct$;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap(paramsMap => this.productsService.getProduct(paramsMap.get('id')))
    // ).subscribe((product: Product) => this.product = product)
    this.route.paramMap
      .subscribe(paramMap => 
        this.productsService.setSelectedProductId(Number(paramMap.get('id'))));

    this.products$.subscribe((data: Product[]) => this.productsNo = data.length);
  }

  // show() {
  //   console.log(this.route.snapshot.params['id']);
  // }

}
