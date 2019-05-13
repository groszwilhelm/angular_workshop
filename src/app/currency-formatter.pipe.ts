import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter'
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: any, currency: any): any {
    console.log('ficat');
    return `${value} ${currency}`;
  }
}
