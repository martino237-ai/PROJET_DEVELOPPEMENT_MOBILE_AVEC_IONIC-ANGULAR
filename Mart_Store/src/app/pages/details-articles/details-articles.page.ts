import { Component, OnInit } from '@angular/core';
import { produits } from 'src/app/models/interface-produits';
import { NavController } from '@ionic/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.page.html',
  styleUrls: ['./details-articles.page.scss'],
  standalone: false,
})
export class DetailsArticlesPage implements OnInit {

  detailsDetails!: produits;

  constructor(private navCtrl: NavController) {
    const navigation = history.state;
    if (navigation && navigation.article) {
      this.detailsDetails = navigation.article;
    }
  }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
