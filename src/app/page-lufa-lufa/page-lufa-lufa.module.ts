import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLufaLufaPageRoutingModule } from './page-lufa-lufa-routing.module';

import { PageLufaLufaPage } from './page-lufa-lufa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLufaLufaPageRoutingModule
  ],
  declarations: [PageLufaLufaPage]
})
export class PageLufaLufaPageModule {}
