import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  mySubscription: Subscription;

  ngOnInit() {}
}
