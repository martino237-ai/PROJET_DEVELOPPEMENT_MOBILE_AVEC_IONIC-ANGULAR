import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccueilPage } from './accueil.page';
import { AccueilPageRoutingModule } from './accueil-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccueilPageRoutingModule],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
