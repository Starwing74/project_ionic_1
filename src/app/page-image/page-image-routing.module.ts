import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageImagePage } from './page-image.page';

const routes: Routes = [
  {
    path: '',
    component: PageImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageImagePageRoutingModule {}
