import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { DetailsArticlesPageRoutingModule } from './details-articles-routing.module';
import { DetailsArticlesPage } from './details-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule, 
    DetailsArticlesPageRoutingModule
  ],
  declarations: [DetailsArticlesPage]
})
export class DetailsArticlesPageModule {}
