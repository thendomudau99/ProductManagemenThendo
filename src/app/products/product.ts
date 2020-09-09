export interface IProduct {
    productId : number;
    productName? : string;
    finalPrice : number;
    discount : number
    price : number;
    starRating : number;
    imageUrl : string;

    showProduct?(): boolean;
}