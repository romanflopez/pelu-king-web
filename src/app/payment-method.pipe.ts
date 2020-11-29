import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethod } from './model/models.model';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {

  transform(value: string): string {
    let paymentMethod: string = ''
    switch (value) {
      case (PaymentMethod.CARD):
        paymentMethod = 'Tarjeta'
        break;
      case (PaymentMethod.CASH):
        paymentMethod = 'Efectivo'
        break;
    }
    return paymentMethod
  }

}
