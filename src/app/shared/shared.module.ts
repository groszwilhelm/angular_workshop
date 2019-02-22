import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from './pipes/currency.pipe';
import { ZoomImageDirective } from './directives/zoom.directive';

const IMPORTS_EXPORTS = [
  CurrencyFormatterPipe,
  ZoomImageDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...IMPORTS_EXPORTS
  ],
  declarations: [
    ...IMPORTS_EXPORTS
  ]
})
export class SharedModule { }
