import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-save-token',
  templateUrl: './save-token.component.html',
  styleUrls: ['./save-token.component.css']
})
export class SaveTokenComponent implements OnInit {



  constructor(private route: ActivatedRoute,
              private tokenService: TokenService,
              private router: Router) {

  }

  ngOnInit() {
    const fragments = {};
    this.route.fragment.subscribe(params => {
      params.replace(/([^=&]+)=([^&]*)/g, (m, key, value) => fragments[key] = value);
    });
    if (fragments.hasOwnProperty('error')) {
      this.router.navigate(['/login']);
    } else {
      this.tokenService.saveToken(fragments['access_token'])
      this.router.navigate(['/account']);
    }
  }

}
