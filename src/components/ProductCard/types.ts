export interface Product {
    id: number;
    name: string;
    rating: number;
    type: 'Electronics' | 'Fashion';
    price: number;
    discountedPrice: number;
    onSale: boolean;
    image: string;
}