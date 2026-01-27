import { Component, OnInit } from '@angular/core';
import { produits } from 'src/app/models/interface-produits';
import { ModalController, NavController, ToastController, ToastOptions } from '@ionic/angular';
import SwiperCore, { Autoplay, Pagination,Navigation,EffectFade } from 'swiper';
import { Storage } from '@ionic/storage';
import { itemCart } from 'src/app/models/interface-itemsCart';
import { PanierPage } from '../panier/panier.page';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);


@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.page.html',
  styleUrls: ['./details-articles.page.scss'],
  standalone: false,
})
export class DetailsArticlesPage implements OnInit {
  autoplayConfig = {
  delay: 5000,
  disableOnInteraction: false
};


  produitDetails!: produits;

  constructor(
    private navCtrl: NavController,
    public storage:Storage,
    public toastctrl:ToastController,
    public modalCtrl:ModalController) {
    const navigation = history.state;
    if (navigation && navigation.article) {
      this.produitDetails = navigation.article;
    }
  }

   async ngOnInit() {
    await this.storage.create();
   }
  async AddToCard(produit: produits) {
  let added = false;

  // Récupération du panier
  let cart: itemCart[] = await this.storage.get('cart');

  // Si le panier est vide
  if (!cart || cart.length === 0) {
    cart = [{
      item: produit,
      qty: 1,
      amount: produit.prix
    }];
  } 
  else {
    // Vérifier si le produit existe déjà
    for (let element of cart) {
      if (element.item.id === produit.id) {
        element.qty += 1;
        element.amount += produit.prix;
        added = true;
        break;
      }
    }

    // Si le produit n'existe pas encore
    if (!added) {
      cart.push({
        item: produit,
        qty: 1,
        amount: produit.prix
      });
    }
  }

  // Sauvegarde du panier
  await this.storage.set('cart', cart);

  // Message utilisateur
  const toast = await this.toastctrl.create({
    message: added
      ? 'Votre panier a été mis à jour'
      : 'Article ajouté au panier',
    duration: 1500,
    position: 'bottom',
    buttons: [{ icon: 'close', role: 'cancel' }]
  });

  await toast.present();
}
opencart(): void {
  this.modalCtrl.create({
    component: PanierPage,
    cssClass: 'my-custom-class'
  }).then((modal) => {
    modal.present();
  });

}
}
