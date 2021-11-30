import { Cart } from "./cart";
import { Product } from "./product";

export interface CartProduct {
    product:Product;
    cart:Cart;
    quantity:number;
}
