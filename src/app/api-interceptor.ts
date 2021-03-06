import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TokenService} from './services/token.service';
import {Router} from '@angular/router';

import 'rxjs/add/operator/do';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  readonly BASE_URL = 'https://www.googleapis.com/books/v1';

  constructor(private tokenService: TokenService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone(
      {
        url: `${this.BASE_URL}/${req.url}`,
        setHeaders: {
          'Authorization': `Bearer ${this.tokenService.getToken()}`
        }
      },
    );

    return next.handle(request)
      .do(event => {
      }, err => {
        if (err['error']['error']['code'] === 401) {
          this.router.navigate(['/login']);
        }
      });
  }
}
