import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-list/details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  // {
  //   path: 'product-list',
  //   component: ProductListComponent
  // },
  {
    path: 'products',
    component: ProductsComponent
  },
  // {
  //   path: 'product-list/:id',
  //   component: ProductDetailsComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
