import { Component } from '@angular/core';
//import { DetailsArticlesPage } from '../details-articles/details-articles.page';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { produits } from 'src/app/models/interface-produits';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  Articles : produits[];

  constructor(public navCtrl:NavController, 
    alertCtrl:AlertController,
    modalCtrl:ModalController
  ) {
    this.Articles=[
      {
        titre :'stylo',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deserunt asperiores quod! Laboriosam, perspiciatis cum a nesciunt eos error? Id laudantium non veritatis, accusamus praesentium ipsam ea obcaecati numquam cum!',
        prix : 15000,
        date_creation: new Date(),
        ville:'yaounde',
        id: 1,
        etat:'neuf',
        disponibilite:{
          disponible:true,
          type:'objet',
          
        },
        images:[
          'assets/produits/stylo-bleu.jpeg',
          'assets/produits/cahier-A4.jpeg'

        ]
      },
      {
        titre :'calculatrice',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deserunt asperiores quod! Laboriosam, perspiciatis cum a nesciunt eos error? Id laudantium non veritatis, accusamus praesentium ipsam ea obcaecati numquam cum!',
        prix : 15000,
        date_creation: new Date(),
        ville:'yaounde',
        id: 1,
        etat:'neuf',
        disponibilite:{
          disponible:true,
          type:'objet',
          
        },
        images:[
          'assets/produits/Calculatrice.jpeg',
          'assets/produits/ciseau.jpeg'

        ]
      }
    ]
      
  }
  
}
