import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  PatternValidator,
} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router) {}
  paymentGroup = new FormGroup({
    cardControl: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{16}'),
    ]),
    monthControl: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(12),
    ]),
    yearControl: new FormControl('', [
      Validators.required,
      Validators.min(21),
      Validators.max(99),
    ]),
    cvvControl: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{3,4}$'),
    ]),
    nameControl: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}

  onSuccess() {
    this.router.navigate(['/success']);
    console.log(this.paymentGroup);
  }
}
