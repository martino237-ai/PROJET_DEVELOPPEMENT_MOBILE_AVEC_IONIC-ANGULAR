import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { itemCart } from 'src/app/models/interface-itemsCart';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: false,
})
export class PanierPage implements OnInit {

  cartItems: itemCart[] = [];

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
  ) {}

  async ngOnInit() {
    // Initialiser le stockage
    await this.storage.create();
    // Charger les articles du panier
    await this.loadCart();
  }

  // Charger les articles du panier depuis le stockage
  async loadCart() {
    this.cartItems = await this.storage.get('cart') || [];
  }

  // Retourner à la page précédente
  goBack() {
    this.navCtrl.back();
  }

  // Fermer le modal (si utilisé comme modal)
  closemodal(): void {
    this.navCtrl.back();
  }

  // Augmenter la quantité d'un article
  async increaseQty(item: itemCart) {
    item.qty += 1;
    item.amount = item.item.prix * item.qty;
    await this.saveCart();
  }

  // Diminuer la quantité d'un article
  async decreaseQty(item: itemCart) {
    if (item.qty > 1) {
      item.qty -= 1;
      item.amount = item.item.prix * item.qty;
      await this.saveCart();
    }
  }

  // Supprimer un article du panier
  async removeItem(index: number) {
    this.cartItems.splice(index, 1);
    await this.saveCart();
  }

  // Sauvegarder le panier
  async saveCart() {
    await this.storage.set('cart', this.cartItems);
  }

  // Calculer le total du panier
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.amount, 0);
  }

  // Calculer le nombre total d'articles
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.qty, 0);
  }

  // Contacter le vendeur
  contactSeller(product: any) {
    // TODO: implémenter la logique de contact (email, téléphone, etc.)
    console.log('Contacter le vendeur pour le produit:', product.titre);
    // Pour l'instant, afficher une alerte
    alert(`Contacter le vendeur pour ${product.titre}`);
  }
}
