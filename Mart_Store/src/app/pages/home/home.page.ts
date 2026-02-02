import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { produits } from 'src/app/models/interface-produits';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Articles: produits[] = [];
  filteredArticles: produits[] = [];
  searchTerm: string = '';

  constructor(
    private navCtrl: NavController,
    private productService: ProductService
  ) {}

  ionViewWillEnter() {
    this.loadProducts();
  }

  async loadProducts() {
    const list = await this.productService.getProducts();
    if (list && list.length) {
      this.Articles = list;
    }
    this.filteredArticles = this.Articles;
  }

  filterArticles(event: any) {
    const searchTerm = (event.target.value || '').toLowerCase();
    this.filteredArticles = this.Articles.filter(article =>
      article.titre.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.categorie.toLowerCase().includes(searchTerm)
    );
  }

  createRange(n: number) {
    return new Array(Math.max(0, Math.floor(n)));
  }

  AfficherDetails(article: produits): void {
    this.navCtrl.navigateForward('/details-articles', { state: { article } });
  }

  goToAddProduct() {
    this.navCtrl.navigateForward('/add-product');
  }

}

