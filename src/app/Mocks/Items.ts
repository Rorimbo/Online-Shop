import { Item } from '../Types/Item';

export const ITEMS: Item[] = [
  {
    id: 0,
    name: 'Ghost in the graveyard',
    type: 'T-shirt',
    description: 'Описание',
    color: 'White',
    sizes: ['S', 'M', 'L'],
    price: 1500,
    previewUrl: '../../assets/White.png',
    imagesUrls: [
      '../../assets/White.png',
      '../../assets/White.png',
      '../../assets/White.png',
    ],
  },
  {
    id: 1,
    name: 'Ghost in the graveyard',
    type: 'T-shirt',
    description: 'Описание',
    color: 'Black',
    sizes: ['S', 'M', 'L'],
    price: 1500,
    previewUrl: '../../assets/Black.png',
    imagesUrls: [
      '../../assets/Black.png',
      '../../assets/Black.png',
      '../../assets/Black.png',
    ],
  },
];
