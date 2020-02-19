import { AppError } from './../../../common/app-specific-errors/app-error';
import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NotFound } from 'common/app-specific-errors/not-found';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  post: any = [];
  constructor(private service: TestService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(res => {
      console.log(res);
    }, (error: AppError) => {
      if (error instanceof NotFound) {
        alert('Not Found');
      } else {
        throwError(new AppError());
      }
    });
  }

}
