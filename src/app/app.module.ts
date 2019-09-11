import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductComponent } from './product-list/product/product.component';
import { TagFilterComponent } from './product-list/tag-filter/tag-filter.component';
import { ProductDetailsComponent } from './product-list/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './product-list/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './product-list/effects/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    TagFilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ productState: reducer }),
    EffectsModule.forRoot([ProductEffect])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
