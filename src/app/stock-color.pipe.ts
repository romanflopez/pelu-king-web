import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockColor'
})
export class StockColorPipe implements PipeTransform {

  transform(value: number): string {
    let color = ''
    switch (value) {
      case 0:
      case 1:
        color = 'product-danger'
        break;
      case 2:
        color = 'product-warning'
        break;
      case 3:
        color = 'product-atention'
        break;
      default:
        color = 'product-good'
        break;
    }
    return color
  }

}
