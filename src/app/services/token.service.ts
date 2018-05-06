import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie";

@Injectable()
export class TokenService {

  constructor(private cookieService: CookieService) { }

  saveToken(token: string): void {
    this.cookieService.put('token', token);
  }

}
