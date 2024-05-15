import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCorvinalPage } from './page-corvinal.page';

const routes: Routes = [
  {
    path: '',
    component: PageCorvinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCorvinalPageRoutingModule {}
