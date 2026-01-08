import { Component } from '@angular/core';
import { DetailsArticlesPage } from '../details-articles/details-articles.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  Articles : any[];

  constructor(public navCtrl:NavController) {
    this.Articles=[
      {nom : 'telephone', prix:145,detail:'lorem'},
      {nom : 'television', prix:1150,detail:'lorem'},
      {nom : 'Sac à dos', prix:1745,detail:'lorem'},
      {nom : 'teORe', prix:1465,kdetail:'lorem'}
      
    ]

  }
  showDetails(): void {
    this.navCtrl.push(DetailsArticlesPage)
  }
}
