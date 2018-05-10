import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShelfService} from "../../services/shelf.service";
import {Shelf} from "../../domian/shelf";

@Component({
  selector: 'app-shelf-view',
  templateUrl: './shelf-view.component.html',
  styleUrls: ['./shelf-view.component.css']
})
export class ShelfViewComponent implements OnInit {

  shelf: Shelf;

  constructor(private route: ActivatedRoute,
              private shelfService: ShelfService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id'];
      this.shelfService.getShelves(id)
        .subscribe(shelf => {
          this.shelf = shelf;
        });
    });
  }

}
