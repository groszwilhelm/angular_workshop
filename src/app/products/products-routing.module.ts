import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductShellComponent } from "./product-shell/product-shell.component";
import { DetailWrapperComponent } from "./product-shell/detail-wrapper/detail-wrapper.component";
import { DetailComponent } from "./product-shell/detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: ProductShellComponent,
    children: [
      {
        path: ":id",
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ProductsRoutingModule {}
