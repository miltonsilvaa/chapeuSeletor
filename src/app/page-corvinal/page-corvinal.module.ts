import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCorvinalPageRoutingModule } from './page-corvinal-routing.module';

import { PageCorvinalPage } from './page-corvinal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCorvinalPageRoutingModule
  ],
  declarations: [PageCorvinalPage]
})
export class PageCorvinalPageModule {}
