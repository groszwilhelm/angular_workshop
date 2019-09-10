import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsService } from './products/products.service';
import { MockedProductsService } from './products/mocked-products.service';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [
    { provide: ProductsService, useClass: MockedProductsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
