import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'localdatetime'})
export class LocalDateTimePipe implements PipeTransform {
  transform(datearray: string[]): Date {
    return new Date(datearray.join(','));
  }
}