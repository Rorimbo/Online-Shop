import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  orderForm: FormGroup;

  constructor() {
    this.orderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      comment: new FormControl(''),
      country: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      index: new FormControl('', [Validators.required]),
      delivery: new FormControl('', [Validators.required]),
      pay: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.orderForm);
  }

  getFormControl(formControlName: string) {
    return this.orderForm.get(formControlName);
  }
}
