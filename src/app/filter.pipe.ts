import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchFriends: string): any[] {
    if(!items) return [];
    if(!searchFriends) return items;
searchFriends = searchFriends.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().substring(0,searchFriends.length).includes(searchFriends,0);
    });
   }
}