import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/services/cart-data.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() productsList: [];
  product: any;
  cartProductList: any = [];
  // get data(): any {
  //   return this.dataService;
  // }
  constructor(
    private router: Router,
    public dataService: DataService,
    public cartData: CartDataService
  ) {}

  ngOnInit(): void {}

  openProduct(data) {
    this.product = data;
    this.dataService.serviceData = data;
    this.router.navigate(['/product', data.id], {
      queryParams: { data: this.product.title },
    });
  }
  onAddCart(data) {
    console.log(data);
    this.cartData.addToCart(data);
  }
}
