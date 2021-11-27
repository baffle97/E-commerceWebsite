import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss'],
})
export class ShippingDetailsComponent implements OnInit {
  constructor() {}
  shippingForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    firstNameControl: new FormControl('', Validators.required),
    lastNameControl: new FormControl('', Validators.required),
    addressControl: new FormControl('', Validators.required),
    cityControl: new FormControl('', Validators.required),
    stateControl: new FormControl('', Validators.required),
    postalControl: new FormControl('', [
      Validators.required,
      Validators.pattern('d{6}'),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.shippingForm);
  }
}
