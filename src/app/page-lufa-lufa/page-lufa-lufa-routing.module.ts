import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLufaLufaPage } from './page-lufa-lufa.page';

const routes: Routes = [
  {
    path: '',
    component: PageLufaLufaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLufaLufaPageRoutingModule {}
