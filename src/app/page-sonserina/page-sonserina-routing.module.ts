import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSonserinaPage } from './page-sonserina.page';

const routes: Routes = [
  {
    path: '',
    component: PageSonserinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSonserinaPageRoutingModule {}
