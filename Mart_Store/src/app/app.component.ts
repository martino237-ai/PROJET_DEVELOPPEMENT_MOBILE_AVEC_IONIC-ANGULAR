import { Component } from '@angular/core';
import { category } from './models/interface-category';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  categories: category[];
  constructor(public menuctrl: MenuController, private navCtrl: NavController) {
    // Initialisation des catégories du menu
    this.categories = [
      {
        titre: "vetements",
        description: "description",
        icon: "shirt"
      },
      {
        titre: "Electroniques",
        description: "description",
        icon: "phone-portrait"
      },
      {
        titre: "modes et accessoires",
        description: "description",
        icon: "bag"
      },
      {
        titre: "chausssures",
        description: "description",
        icon: "archive"
      }
    ];
  }

  // Fermer le menu
  fermer_menu() {
    this.menuctrl.close();
  }

  // Naviguer vers la page d'accueil avec une catégorie sélectionnée
  goToHome(category: category) {
    this.menuctrl.close();
    // Pour l'instant, naviguer simplement vers home
    // TODO: passer la catégorie pour filtrer
    this.navCtrl.navigateForward('/home');
  }

  // Naviguer vers le panier
  goToPanier() {
    this.menuctrl.close();
    this.navCtrl.navigateForward('/panier');
  }

  // Placeholder pour le profil
  goToProfil() {
    this.menuctrl.close();
    // TODO: créer une page profil
    console.log('Naviguer vers profil');
  }

  // Placeholder pour les messages
  goToMessages() {
    this.menuctrl.close();
    // TODO: créer une page messages
    console.log('Naviguer vers messages');
  }

  // Placeholder pour à propos
  goToAbout() {
    this.menuctrl.close();
    // TODO: créer une page à propos
    console.log('Naviguer vers à propos');
  }
}
