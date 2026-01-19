import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { produits } from 'src/app/models/interface-produits';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Articles: produits[];

  constructor(
    public navCtrl: NavController,
    alertCtrl: AlertController,
    modalCtrl: ModalController
  ) {

    this.Articles = [

      // ===== PRODUIT 1 =====
      {
        id: 1,
        titre: 'Stylo',
        description: 'Stylo de qualité pour usage scolaire et professionnel.',
        prix: 1500,
        date_creation: new Date(),
        ville: 'Yaoundé',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 4,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500
        },
        images: [
          'assets/produits/stylo-bleu.jpeg',
          'assets/produits/traceuse.jpeg'
        ]
      },

      // ===== PRODUIT 2 =====
      {
        id: 2,
        titre: 'Calculatrice',
        description: 'Calculatrice scientifique idéale pour les élèves et étudiants.',
        prix: 8000,
        date_creation: new Date(),
        ville: 'Yaoundé',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 5,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500
        },
        images: [
          'assets/produits/Calculatrice.jpeg',
          'assets/produits/ciseau.jpeg'
        ]
      },

      // ===== PRODUIT 3 =====
      {
        id: 3,
        titre: 'Cahier A4',
        description: 'Cahier A4 de 200 pages, couverture rigide.',
        prix: 2500,
        date_creation: new Date(),
        ville: 'Douala',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 3,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500

        },
        images: [
          'assets/produits/cahier-A4.jpeg'
        ]
      },

      // ===== PRODUIT 4 =====
      {
        id: 4,
        titre: 'gomme-blanche',
        description: 'gomme blanche douce pour effacer sans abîmer le papier.',
        prix: 12000,
        date_creation: new Date(),
        ville: 'Bafoussam',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 4,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500
        },
        images: [
          'assets/produits/gomme-blanche.jpeg'
        ]
      },

      // ===== PRODUIT 5 =====
      {
        id: 5,
        titre: 'colle',
        description: 'Colle blanche polyvalente pour papier et carton.',
        prix: 500,
        date_creation: new Date(),
        ville: 'mbalmayo',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 5,
        disponibilite: {
          disponible: true,
          type: 'magasin',
          frais_livraison: 0
        },
        images: [
          'assets/produits/colle-sbck.jpeg'
        ]
      },

      // ===== PRODUIT 6 =====
      {
        id: 6,
        titre: 'regle-30cm',
        description: 'Règle en plastique solide, précision scolaire.',
        prix: 500,
        date_creation: new Date(),
        ville: 'douala',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 4,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500
        },
        images: [
          'assets/produits/regle-30cm.jpeg'
        ]
      },
      // ===== PRODUIT 7 =====
      {
        id: 7,
        titre: 'feutres-couleurs',
        description: 'Feutres à couleurs pour dessin et écriture.',
        prix: 3500,
        date_creation: new Date(),
        ville: 'yaoundé',
        etat: 'neuf',
        categorie: 'Fournitures scolaires',
        etoiles: 5,
        disponibilite: {
          disponible: true,
          type: 'livraison',
          frais_livraison: 500
        },
        images: [
          'assets/produits/feutres-couleurs.jpeg'
        ]
      }

    ];


  }
  AfficherDetails(article: produits): void {
  this.navCtrl.navigateForward('/details-articles', {
    state: {
      article: article
    }
  });
}



    
}
