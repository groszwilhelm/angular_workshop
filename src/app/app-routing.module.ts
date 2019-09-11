import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [{
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
