
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import {TokenService} from './services/token.service';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  readonly BASE_URL = 'https://www.googleapis.com/books/v1';
  readonly KEY_API = 'AIzaSyBqH5FgK-sUvaQ-upEjJhu3idpto-pjn_s';

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const params = new HttpParams();
    params.set('key', this.KEY_API);

    const request = req.clone(
      {
        url: `${this.BASE_URL}/${req.url}`,
        params: params,
        setHeaders: {
          'Authorization': `Bearer ${this.tokenService.getToken()}`
        }
      },
    );

    return next.handle(request)
      .do(event => { }, err => console.log(err.error.message));
  }
}
