import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit {
  product: any = [];
  quantity: any;
  constructor(private cartService: CartDataService) {}

  ngOnInit(): void {
    this.cartService.getCartProduct().subscribe((data) => {
      this.product = data;
      this.quantity = this.product.quantity;
    });
  }

  onQuantity($event) {}

  onEmptyCart() {
    this.cartService.removeAll();
  }
}
