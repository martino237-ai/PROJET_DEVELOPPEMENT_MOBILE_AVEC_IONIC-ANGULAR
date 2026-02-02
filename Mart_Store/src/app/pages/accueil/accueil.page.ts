import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
    standalone: false,
})
export class AccueilPage {
  constructor(private nav: NavController) {}

  goToSignup() { this.nav.navigateForward('/signup'); }
  goToLogin() { this.nav.navigateForward('/login'); }
  skipToHome() { this.nav.navigateForward('/home'); }
}
