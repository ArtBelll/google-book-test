import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly url = 'https://accounts.google.com/o/oauth2/v2/auth';
  readonly client_id = '101136761905-kfc45eum300aueiqeakcq45qjnr5m95i.apps.googleusercontent.com';
  readonly response_type = 'token';
  readonly scope = 'https://www.googleapis.com/auth/books';
  readonly redirect_uri = 'http://localhost:4200/save-token';

  loginUrl: String;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginUrl = `${this.url}
                    ?client_id=${this.client_id}
                    &response_type=${this.response_type}
                    &scope=${this.scope}
                    &redirect_uri=${this.redirect_uri}`
                    .replace(/ /g, '');
  }

}
