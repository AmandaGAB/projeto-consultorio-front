import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusculo'
})
export class MinusculoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
