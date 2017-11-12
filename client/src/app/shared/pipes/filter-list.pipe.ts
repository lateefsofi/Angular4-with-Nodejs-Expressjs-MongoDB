import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterList'
})
@Injectable()
export class FilterListPipe implements PipeTransform {

  transform(list: any[], key: string, searchString: string): any {
  debugger
    if(list && key && searchString)
    	return list.filter(listItem => listItem[key].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    else
      return list;
  }
}