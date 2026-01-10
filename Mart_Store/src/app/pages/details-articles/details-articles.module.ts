import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsArticlesPageRoutingModule } from './details-articles-routing.module';
import { DetailsArticlesPage } from './details-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsArticlesPageRoutingModule
  ],
  declarations: [DetailsArticlesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ OBLIGATOIRE pour swiper-container
})
export class DetailsArticlesPageModule {}
