import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../Mocks/Items';
import { Item } from '../Types/Item';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { CartItem } from '../Types/CartItem';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModelComponent {
  id: number;
  items: Item[] = ITEMS;
  currentItem?: Item;
  cartItems: CartItem[];
  total: number = 0;

  orderForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.orderForm = new FormGroup({
      size: new FormControl('', [Validators.required]),
    });

    route.params.subscribe((params) => (this.id = params['id']));
    this.currentItem = this.items.find((item) => item.id == this.id);
  }

  submitForm() {
    if (
      this.cartItems.find(
        (el) => el.id == this.id && el.size == this.orderForm.get('size')?.value
      )
    ) {
      this.cartItems = this.cartItems.map((el) => {
        if (el.id == this.id && el.size == this.orderForm.get('size')?.value) {
          el.amount = el.amount + 1;
          el.totalPrice = el.amount * el.price;
        }
        return el;
      });
    } else {
      if (this.currentItem) {
        let newCartItem: CartItem = {
          id: this.currentItem.id,
          name: this.currentItem.name,
          type: this.currentItem.type,
          color: this.currentItem.color,
          size: this.orderForm.get('size')?.value,
          price: this.currentItem.price,
          totalPrice: this.currentItem.price,
          previewUrl: this.currentItem.previewUrl,
          amount: 1,
        };
        this.cartItems.unshift(newCartItem);
      }
    }
  }
}
