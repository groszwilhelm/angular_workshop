import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from './core/core.module';
import { ProductComponent } from './product-list/product/product.component';
import { TagFilterComponent } from './product-list/tag-filter/tag-filter.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsSidebarComponent } from "./products/sidebar/products-sidebar.component";
import { ProductDetailsComponent } from "./products/detail/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    TagFilterComponent,
    ProductsComponent,
    ProductsSidebarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
