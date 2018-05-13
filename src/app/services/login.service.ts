import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class LoginService {

  private readonly url = 'https://accounts.google.com/o/oauth2/v2/auth';
  private readonly client_id = '101136761905-kfc45eum300aueiqeakcq45qjnr5m95i.apps.googleusercontent.com';
  private readonly response_type = 'token';
  private readonly scope = 'https://www.googleapis.com/auth/books';
  private readonly redirect_uri = `${environment.url}/save-token`;

  constructor() {
  }

  getAuthUrl(): string {
    return `${this.url}
                    ?client_id=${this.client_id}
                    &response_type=${this.response_type}
                    &scope=${this.scope}
                    &redirect_uri=${this.redirect_uri}`
      .replace(/ /g, '');
  }
}
