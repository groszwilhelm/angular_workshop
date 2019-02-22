import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ZoomImageDirective } from './zoom.directive';
import { TagFilterComponent } from './tag-filter/tag-filter.component';
import { CurrencyFormatterPipe } from './currency.pipe';
import { ProductService } from './core/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ZoomImageDirective,
    TagFilterComponent,
    CurrencyFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
