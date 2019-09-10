import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ZoomDirective } from "./zoom.directive";
import { CurrencyFormatterPipe } from "./currency-formatter.pipe";

@NgModule({
  declarations: [CurrencyFormatterPipe, ZoomDirective],
  exports: [CurrencyFormatterPipe, ZoomDirective],
  imports: [CommonModule]
})
export class SharedModule {}
