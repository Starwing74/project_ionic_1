import { Component, OnInit } from '@angular/core';
import { UneImage } from '../interfaces/une-image';

@Component({
  selector: 'app-page-image',
  templateUrl: './page-image.page.html',
  styleUrls: ['./page-image.page.scss'],
})
export class PageImagePage implements OnInit {

  private img: UneImage;

  constructor() {
    this.img = {
      titre: 'Mon super text',
      src: '/assets/images/index.jpg'
    };
  }

  ngOnInit() {
  }

  public methodeLoaded() {
    console.log('methodeLoaded');
  }

}
