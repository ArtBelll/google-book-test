import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-save-token',
  templateUrl: './save-token.component.html',
  styleUrls: ['./save-token.component.css']
})
export class SaveTokenComponent implements OnInit {



  constructor(private route: ActivatedRoute, private tokenService: TokenService) {

  }

  ngOnInit() {
    const fragments = {};
    this.route.fragment.subscribe(params => {
      params.replace(/([^=&]+)=([^&]*)/g, (m, key, value) => fragments[key] = value);
    });
    this.tokenService.saveToken(fragments['access_token']);
  }

}
