import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from '../Types/Item';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { ITEMS } from '../Mocks/Items';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CollectionsComponent {
  items: Item[] = ITEMS;
}
