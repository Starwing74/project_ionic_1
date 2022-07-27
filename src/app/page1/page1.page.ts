import { Component, OnInit } from '@angular/core';
import { UnBouton } from './../interfaces/un-bouton'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  private boutons: UnBouton[];

  private search: string;

  constructor() {
    this.boutons = [];
    for (let k = 0; k < 20; k++) {
      this.boutons.push({
        label: `mon bouton n°${k}`,
        id: k
      });
    }
  }

  ngOnInit() {
  }

  public methodeClick(id) {
    console.log(`methodeClick depuis le bouton ${id}`);
  }

  public updateBarre() {
    console.log(`updateBar() -> ${this.search}`);
  }

  public loadData(evt) {
    const _this: any = this;

    setTimeout(function() {
      const longeur: number = _this.boutons.length;
      for (let k = longeur; k < longeur + 20; k++) {
        _this.boutons.push({
          label: `mon bouton n°${k}`,
          id: k
        });
      }
      // console.log(evt);
      evt.target.complete();
    }, 1000);
  }

}
