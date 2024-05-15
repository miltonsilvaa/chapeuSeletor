import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGrifinoriaPage } from './page-grifinoria.page';

const routes: Routes = [
  {
    path: '',
    component: PageGrifinoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGrifinoriaPageRoutingModule {}
