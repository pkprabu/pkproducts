import { AppError } from './../../../common/app-specific-errors/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NotFound } from 'common/app-specific-errors/not-found';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.baseUrl}`).pipe(map(res => res), retry(3), catchError((error: HttpErrorResponse) => {
      return throwError(new AppError(error));
    }));
  }

  getSinglePost(id) {
    this.http.get(`${this.baseUrl}/${id}`).pipe(retry(3), catchError(this.errorHandler));
  }

  deletePost(resource) {
    this.http.delete(`${this.baseUrl}/${resource}`).pipe(retry(3), catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFound(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}
