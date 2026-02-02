import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
    standalone: false,
})
export class SignupPage implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor(private storage: Storage, private nav: NavController) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async signup() {
    const users = (await this.storage.get('users')) || [];
    const exists = users.find((u: any) => u.email === this.email);
    if (exists) {
      alert('Un compte avec cet email existe déjà.');
      return;
    }
    const user = { name: this.name, email: this.email, password: this.password };
    users.push(user);
    await this.storage.set('users', users);
    await this.storage.set('currentUser', user);
    this.nav.navigateRoot('/home');
  }
}
