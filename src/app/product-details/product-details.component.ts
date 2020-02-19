import { trigger, animate, style, transition } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class ProductDetailsComponent implements OnInit {
  private singleProductId;
  private singleProduct: any = [];
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.singleProductId = params.get('id');
    });

    this.service.getSingle(this.singleProductId).subscribe(res => {
      this.singleProduct = res;
      console.log(res);
    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        console.log(err);
        console.log(err.url);
      } else {
        alert(`Unexpected Error Occured`);
      }
    });
  }

  back() {
    this.router.navigate(['/products']);
  }
}
