import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any[] {
    if (value.length < 2) {
      return value;
    }

    value = value.sort((a, b) => {
      if (a[propName] === b[propName]) {
        return 0;
      } else if (a[propName] > b[propName]) {
        return 1;
      }
      return -1;
    });

    return value;

  }

}
