import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDataService } from 'src/app/services/cart-data.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  selected: string = '';
  product: any;
  productData: any;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    public cartService: CartDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.product = params.data;
      console.log(this.product);
    });
    this.productData = this.dataService.serviceData;
    console.log(this.productData);
  }
  onAddCart(data) {
    this.cartService.addToCart(data);
  }
}
