import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-shell-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  products$ = this.productsService.productsWithCategories$;

  constructor(private productsService: ProductsService) { }

}
