import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  product: any = [];
  total: number = 0;
  tax: number = 0;
  promocode: string = '';
  grandTotal: number;

  constructor(private dataCart: CartDataService) {}

  ngOnInit(): void {
    this.dataCart.getCartProduct().subscribe((res) => {
      this.product = res;
      this.total = this.dataCart.getTotalPrice();
      this.tax = this.total * 0.05;
      this.grandTotal = this.total + this.tax;
    });
    console.log(this.total);
  }
  onPromocode($event) {
    this.promocode = $event.target.value;
    console.log(this.promocode);
  }
  onApply() {
    if (this.promocode === 'BOOTCAMP10' || this.promocode === 'bootcamp10') {
      this.total = this.total * 0.9;
      this.tax = this.total * 0.05;
      this.grandTotal = this.total + this.tax;
    }
  }
}
