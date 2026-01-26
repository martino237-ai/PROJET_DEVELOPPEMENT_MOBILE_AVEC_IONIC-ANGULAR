import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { category } from 'src/app/models/interface-category';

@Component({
  selector: 'app-home',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
  standalone: false,
})
export class MenuPage {
  categories:category[];
  constructor( public menuctrl:MenuController) {
    this.categories=[
      {
        titre:"vetements",
        description:"description",
        icon:"shirt"
      },
      {
        titre:"Electroniques",
        description:"description",
        icon:"phone-portrait"
      },
      {
        titre:"modes et accessoires",
        description:"description",
        icon:"bag"
      },
      {
        titre:"chausssures",
        description:"description",
        icon:"archive"
      }
    ]
  }
  fermer_menu(){
    this.menuctrl.close();
  }
}
