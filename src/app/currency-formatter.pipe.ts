import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  pure: false
})
export class CurrencyFormatterPipe implements PipeTransform {

  transform(value: any, currency): any {
    switch (currency) {
      case 'USD':
        return value + ' ' + '🥰';
      default:
        return value + ' ' + '💩';
    }
  }

}
