import { fadeIn } from './../../../common/animations';
import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    fadeIn
  ]
})
export class ProductsComponent implements OnInit, OnDestroy {
  posts: any = [];
  constructor(private service: ProductService, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.getAllPosts();
  }

  onScroll() {
    console.log("scrolled");
  }
  getAllPosts() {
    this.service.get().subscribe(res => {
      this.posts = res;
      console.log(res);
    }, err => {
      alert(`Unexpected Error Occured`);
    });
  }

  goToTop() {
    // alert(this.viewportController.getScrollPosition());
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  ngOnDestroy() {
    const position = this.viewportScroller.getScrollPosition();
    const po = position.join(',');
    localStorage.setItem('scrollPosition', po);
  }

  /* ngAfterViewChecked() {
    //  alert('init');
    const getPosition = localStorage.getItem('scrollPosition');
    const po = getPosition.split(',').join();
    // alert(typeof (po));
    const ary = po.split(',').map(res => parseInt(res));
    // console.log(ary);
    // alert(typeof (ary[0]));
    this.viewportScroller.scrollToPosition([ary[0], ary[1]]);
    // localStorage.clear();
  } */
}
