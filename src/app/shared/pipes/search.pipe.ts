import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], term: string): any[] {
    return products.filter((cur) =>
      cur.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
