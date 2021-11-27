import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit {
  product: any = [];
  quantity: any;
  // @Output() isCompleted = new EventEmitter<boolean>();
  constructor(private cartService: CartDataService) {}

  ngOnInit(): void {
    this.cartService.getCartProduct().subscribe((data) => {
      this.product = data;
      this.quantity = this.product.quantity;
    });
  }

  // // onNext(value: boolean) {
  // //   this.isCompleted.emit(value);
  // }
  onEmptyCart() {
    this.cartService.removeAll();
  }
  onDelete(data: any) {
    this.cartService.removeItem(data);
  }
}
