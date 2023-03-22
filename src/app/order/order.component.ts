import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  orderForm: FormGroup;

  constructor(public dialog: MatDialog) {
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
      index: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ]),
      delivery: new FormControl('', [Validators.required]),
      pay: new FormControl('', [Validators.required]),

      agreement: new FormControl('', [Validators.requiredTrue]),
      notification: new FormControl('', []),
    });
  }

  submitForm() {
    console.log(this.orderForm.value);
    this.openDialog();
  }

  getFormControl(formControlName: string) {
    return this.orderForm.get(formControlName);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: { dialogText: 'Заказ оформлен' },
    });
  }
}
