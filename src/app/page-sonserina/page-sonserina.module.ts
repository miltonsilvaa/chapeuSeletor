import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSonserinaPageRoutingModule } from './page-sonserina-routing.module';

import { PageSonserinaPage } from './page-sonserina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSonserinaPageRoutingModule
  ],
  declarations: [PageSonserinaPage]
})
export class PageSonserinaPageModule {}
