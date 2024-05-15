import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGrifinoriaPageRoutingModule } from './page-grifinoria-routing.module';

import { PageGrifinoriaPage } from './page-grifinoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGrifinoriaPageRoutingModule
  ],
  declarations: [PageGrifinoriaPage]
})
export class PageGrifinoriaPageModule {}
