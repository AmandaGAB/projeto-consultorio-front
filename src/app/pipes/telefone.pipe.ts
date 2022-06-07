import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length === 8){
      return `${value.substring(0, 4)}-${value.substring(4, 8)}`;
    }
    if (value.length === 10){
      return `(${value.substring(0, 2)}) ${value.substring(2, 4)}-${value.substring(6, 10)}`;
    }
    if (value.length === 11){
      return `(${value.substring(0, 3)}) ${value.substring(3, 4)}-${value.substring(7, 11)}`
    }
    return value;

  }

}
