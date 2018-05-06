import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class TokenService {

  private readonly TOKEN = 'token';

  constructor(private cookieService: CookieService) { }

  saveToken(token: string): void {
    this.cookieService.put(this.TOKEN, token);
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN);
  }
}
