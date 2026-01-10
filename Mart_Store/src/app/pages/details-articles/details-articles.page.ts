import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);


@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.page.html',
  styleUrls: ['./details-articles.page.scss'],
  standalone: false,
})
export class DetailsArticlesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
