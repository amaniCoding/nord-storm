declare module 'react-rating-stars-component';
declare module 'react-star-ratings';


export type Product = {
    desc: string
    brand: string,
    rating: number
    ratingCount: number,
    colors: string[],
    price: {original: number, off: number},
    size: string[]
}