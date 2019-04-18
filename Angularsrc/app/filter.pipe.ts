import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchFriends: string): any[] {
    if (!items) return [];
    if (!searchFriends) return items;
    searchFriends = searchFriends.toLowerCase();
    return items.filter(it => {
      let result;
      if (it.firstName)
        result = it.firstName.toLowerCase().substring(0, searchFriends.length).includes(searchFriends, 0);
      if (it.lastName)
        result += it.lastName.toLowerCase().substring(0, searchFriends.length).includes(searchFriends, 0);
      if (it.firstName && it.lastName)
        result += (it.firstName.toLowerCase().substring(0, searchFriends.length) + " " +
          it.lastName.toLowerCase().substring(0, searchFriends.length - it.firstName.length)).includes(searchFriends, 0);
      return result;
    });
  }
}