import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private nav: NavController, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async login() {
    const users = (await this.storage.get('users')) || [];
    const found = users.find((u: any) => u.email === this.email && u.password === this.password);
    if (found) {
      await this.storage.set('currentUser', found);
      this.nav.navigateRoot('/home');
    } else {
      alert('Utilisateur non trouvé ou mot de passe incorrect');
    }
  }
}
