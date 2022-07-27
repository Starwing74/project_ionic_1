import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageImagePageRoutingModule } from './page-image-routing.module';

import { PageImagePage } from './page-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageImagePageRoutingModule
  ],
  declarations: [PageImagePage]
})
export class PageImagePageModule {}
