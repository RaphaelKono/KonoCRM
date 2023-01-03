import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctDateFormat'
})
export class CorrectDateFormatPipe implements PipeTransform {

  transform(date: number, ...args: unknown[]): string {
    let dateFormat = new Date(date);
    let dateToString = dateFormat.getDate()+"."+(dateFormat.getMonth()+1)+"."+dateFormat.getFullYear();
    return dateToString;
  }

}
