import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { SidebarComponent } from './product-shell/sidebar/sidebar.component';
import { DetailComponent } from './product-shell/detail/detail.component';
import { DetailWrapperComponent } from './product-shell/detail-wrapper/detail-wrapper.component';

@NgModule({
  declarations: [
    ProductComponent, ProductListComponent, ProductShellComponent, SidebarComponent, DetailComponent, DetailWrapperComponent
  ],
  exports: [ProductListComponent],
  imports: [
    CommonModule, 
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
