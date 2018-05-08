import { Component, OnInit } from '@angular/core';
import {Shelf} from '../../domian/shelf';
import {ShelfService} from '../../services/shelf.service';

@Component({
  selector: 'app-shelves-page',
  templateUrl: './shelves-page.component.html',
  styleUrls: ['./shelves-page.component.scss']
})
export class ShelvesPageComponent implements OnInit {

  shelves: Shelf[];

  constructor(private shelfService: ShelfService) { }

  ngOnInit() {
    this.shelfService.getAllShelves()
      .subscribe(shelves => {
        this.shelves = shelves;
      });
  }

}
