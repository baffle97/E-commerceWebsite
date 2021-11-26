import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() productsList: [];
  private subjectKeyUp = new Subject<any>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const value = '';
    this.getProducts(value);
    this.subjectKeyUp.pipe(debounceTime(300)).subscribe((data) => {
      this.getProducts(data);
    });
  }
  onSearch($event: any) {
    const value = $event.target.value;
    this.subjectKeyUp.next(value);
    this.getProducts(value);
  }
  getProducts(value) {
    this.api.getProducts().subscribe((res) => {
      // console.log(res);
      let array: any = [];
      res.forEach((item) => {
        // console.log(
        //   'item-',
        //   item.title,
        //   'string value',
        //   value,
        //   'includes',
        //   item.title.includes(value)
        // );
        if (item.title.includes(value)) {
          array.push(item);
        }
      });
      this.productsList = array;
      this.productsList.forEach((item: any) => {
        Object.assign(item, { quantity: 1, total: item.price });
      });
    });
  }
}
