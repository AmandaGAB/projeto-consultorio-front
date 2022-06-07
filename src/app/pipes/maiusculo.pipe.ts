import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiusculo'
})
export class MaiusculoPipe implements PipeTransform {


  transform(value: string): string {
    return value.toLocaleUpperCase()
  }
}
