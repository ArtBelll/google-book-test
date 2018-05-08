import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Shelf} from '../../domian/shelf';
import {ShelfService} from '../../services/shelf.service';
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-shelves-page',
  templateUrl: './shelves-page.component.html',
  styleUrls: ['./shelves-page.component.css']
})
export class ShelvesPageComponent implements OnInit {

  shelvesOrigin: Shelf[];
  shelves: Shelf[];
  itemsPerPage = 5;
  currentPage = 1;

  searchTitle = new FormControl();
  countMoreThanEqual = new FormControl();

  searchPredicate = shelf => shelf.title.toLowerCase().includes(this.searchTitle.value.toLowerCase());
  countPredicate = shelf => shelf.volumeCount >= this.countMoreThanEqual.value;

  constructor(private shelfService: ShelfService) {
  }

  ngOnInit() {
    this.shelfService.getAllShelves()
      .subscribe(shelves => {
        this.shelvesOrigin = shelves;
        this.shelves = shelves;
      });

    this.searchTitle.valueChanges
      .subscribe(title => this.shelves = this.shelvesOrigin.filter(this.combinePredicates()));
    this.countMoreThanEqual.valueChanges
      .subscribe(count => this.shelves = this.shelvesOrigin.filter(this.combinePredicates()));
  }

  private combinePredicates(): (Shelf) => boolean {
    return shelf => this.searchPredicate(shelf) && this.countPredicate(shelf);
  }
}
