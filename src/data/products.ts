import { SyntheticEvent } from 'react';
import { Product } from 'components/ProductCard/types';
import airpods from 'media/images/airpods.png';
import turtleneck from 'media/images/turtleneck.png';
import harman from 'media/images/harman.png';
import garmin from 'media/images/garmin.png';
import iphone from 'media/images/iphone.png';
import hdphn from 'media/images/hdphn.png';
import apple from 'media/images/apple.png';
import galaxy from 'media/images/galaxy.png';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 0,
    name: 'Harman Kardon Speaker',
    rating: 4,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: harman
  },
  {
    id: 1,
    name: 'Women Yellow Turtleneck',
    rating: 5,
    onRatingChange: () => {},
    type: 'Fashion',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: turtleneck
  },
  {
    id: 2,
    name: 'Garmin Watch Fit X',
    rating: 5,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: garmin
  },
  {
    id: 3,
    name: 'Airpods 2nd Gen',
    rating: 2,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: airpods
  },
  {
    id: 4,
    name: 'iPhone XS Max Pro',
    rating: 5,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: iphone
  },
  {
    id: 5,
    name: 'Beats by Dre C 3450',
    rating: 3,
    onRatingChange: () => {},
    type: 'Fashion',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: hdphn
  },
  {
    id: 6,
    name: 'Apple Watch 4 2020',
    rating: 5,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: apple
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch 3',
    rating: 2,
    onRatingChange: (id: number, rating: number) => {},
    type: 'Electronics',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: galaxy
  }
];
