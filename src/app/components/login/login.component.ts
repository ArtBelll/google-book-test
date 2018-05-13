import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUrl: String;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginUrl = this.loginService.getAuthUrl();
  }

}
