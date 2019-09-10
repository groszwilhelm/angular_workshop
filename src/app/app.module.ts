import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ZoomDirective } from './zoom.directive';
import { CurrencyFormatterPipe } from './currency-formatter.pipe';
import { ProductsService } from './products.service';
import { MockedProductsService } from './mocked-products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ZoomDirective,
    CurrencyFormatterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: ProductsService, useClass: MockedProductsService }
  ],
  entryComponents: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
