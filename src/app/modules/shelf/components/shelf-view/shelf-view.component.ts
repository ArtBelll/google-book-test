import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShelfService} from "../../services/shelf.service";

@Component({
  selector: 'app-shelf-view',
  templateUrl: './shelf-view.component.html',
  styleUrls: ['./shelf-view.component.css']
})
export class ShelfViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private shelfService: ShelfService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id'];
      this.shelfService.getShelves(id)
        .subscribe(shelf => console.log(shelf));
    });
  }

}
