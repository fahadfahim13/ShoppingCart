import { SyntheticEvent } from "react";

export interface Product {
    id: number;
    name: string;
    rating: number;
    onRatingChange: (event: SyntheticEvent<Element, Event>, newValue: number | null) => void;
    type: 'Electronics' | 'Fashion';
    curPrice: number;
    prevPrice?: number;
    onSale?: boolean;
    image: string;
    isFavorite?: boolean;
    onFavoriteChange?: () => void;
}