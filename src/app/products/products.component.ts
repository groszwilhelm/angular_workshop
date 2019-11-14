import { Component, OnInit } from "@angular/core";
import { Subscription, interval, timer, fromEvent, Observable } from "rxjs";
import { debounce, take, pluck, map, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: "wsh-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  mySubscription: Subscription;

  textStream$: Observable<string>;

  ngOnInit() {

    const badWords = ['bad', 'foo', 'bar'];

    const input = document.querySelector('input')
    const event$ = fromEvent(input, 'keyup');

    this.textStream$ = event$.pipe(
      debounceTime(500),
      map((evt: any) => evt.target.value),
      map(val => {
        const chunks = val.split(' ');
        return chunks.filter(word => !badWords.includes(word)).join(' ');
      })
    )
    
  }
}
