import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getCartProduct() {
    return this.productList.asObservable();
  }

  setCartProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let cartTotal = 0;
    this.cartItemList.map((item: any) => {
      cartTotal += item.total;
    });
    return cartTotal;
  }
  removeItem(product: any) {
    this.cartItemList.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAll() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
