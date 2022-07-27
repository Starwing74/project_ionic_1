import { Pipe, PipeTransform } from '@angular/core';
import { UnBouton } from './../interfaces/un-bouton';

@Pipe({
  name: 'boutonFiltre'
})
export class BoutonFiltrePipe implements PipeTransform {

  transform(items: UnBouton[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.label.indexOf(filter) !== -1);

    // let res: UnBouton[] = [];

    // for (let i=0; i<items.length; i++) {
    //   if (items[i].label.indexOf(filter) != -1) {
    //     res.push(items[i]);
    //   }
    // }
    // return res;
  }

}
