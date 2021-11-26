import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartDataService } from 'src/app/services/cart-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  public count: number;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public cartNumber: CartDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.cartNumber.getCartProduct().subscribe((res) => {
      this.count = res.length;
      console.log(this.route);
    });
  }
}
