import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent, ProductListComponent
  ],
  exports: [ProductListComponent],
  imports: [
    CommonModule, 
    SharedModule
  ]
})
export class ProductsModule { }
