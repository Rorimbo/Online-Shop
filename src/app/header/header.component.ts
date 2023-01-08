import { Component, Input } from '@angular/core';
import { Link } from '../Types/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input('total') total: number = 0;

  links: Link[] = [
    { id: 0, name: 'Главная', url: '/main' },
    { id: 1, name: 'Коллекции', url: '/collections' },
    { id: 2, name: 'FAQ', url: '/FAQ' },
    { id: 3, name: 'О нас', url: '/about' },
  ];
}
