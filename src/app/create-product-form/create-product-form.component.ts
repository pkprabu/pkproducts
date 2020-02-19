import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'validators/customValidators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  form = new FormGroup({
    productName: new FormControl('', [Validators.required, CustomValidators.firstCharShouldNotBeSpace]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    // quantity: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    manufacturedDate: new FormControl('', [Validators.required]),
    expirationDate: new FormControl('', [Validators.required])
  });

  get productName() {
    return this.form.get('productName');
  }
  get desc() {
    return this.form.get('description');
  }
  // get quantity() {
  //   return this.form.get('quantity');
  // }
  get companyName() {
    return this.form.get('companyName');
  }
  get manufacturedDate() {
    return this.form.get('manufacturedDate');
  }
  get expirationDate() {
    return this.form.get('expirationDate');
  }
  ngOnInit() {
    console.log(this.viewportScroller.getScrollPosition());
  }

  submit(form) {
    alert('Submitted');
    console.log(form.value);
  }

}
