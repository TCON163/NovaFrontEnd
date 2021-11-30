import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart-product';
import { Product } from 'src/app/interfaces/product';
import { Cart } from 'src/app/interfaces/cart';
import { Products } from 'src/app/mock-products';


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  cartProducts:CartProduct[]=[];

  constructor() {}

  ngOnInit(): void {
  }

  addToCart(cartProduct:CartProduct):CartProduct[]{
    // This is a placeholder function.
    return [];
  }

  removeFromCart(cartProduct:CartProduct):CartProduct[]{
    // This is a placeholder function.
    return [];
  }

}
