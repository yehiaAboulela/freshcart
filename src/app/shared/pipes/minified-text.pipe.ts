import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minifiedText',
})
export class MinifiedTextPipe implements PipeTransform {
  transform(text: any): string {
    return text.split(' ').slice(0, 2).join(' ');
  }
}
