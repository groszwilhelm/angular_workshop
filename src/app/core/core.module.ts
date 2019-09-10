import { NgModule } from '@angular/core';
import { ProductApiService } from './services/product.service';

@NgModule({
  providers: [
    ProductApiService
  ],
})
export class CoreModule { }
