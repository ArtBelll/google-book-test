import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Shelf} from '../../domian/shelf';
import {ShelfService} from '../../services/shelf.service';
import {FormControl} from '@angular/forms';
import {FilterManager} from '../../../../filter-manager';
import {ModalDialogService, SimpleModalComponent} from "ngx-modal-dialog";
import {ShelfAdderComponent} from "../shelf-adder/shelf-adder.component";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-shelves-page',
  templateUrl: './shelves-page.component.html',
  styleUrls: ['./shelves-page.component.css']
})
export class ShelvesPageComponent implements OnInit {

  shelves: Shelf[];
  itemsPerPage = 5;
  currentPage = 1;

  searchTitle = new FormControl('');
  countMoreThanEqual = new FormControl();

  isPreviewOpen = false;
  selectedShelf: Shelf;

  constructor(private shelfService: ShelfService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.shelfService.getAllShelves()
      .subscribe(shelves => {
        this.shelves = shelves;
        this.setUpFilterManager();
      });
  }

  openPreview(shelf: Shelf) {
    this.isPreviewOpen = true;
    this.selectedShelf = shelf;
  }

  private setUpFilterManager() {
    const controls = [this.searchTitle, this.countMoreThanEqual];
    const predicates: ((shelf: Shelf) => boolean)[] = [
      shelf => shelf.volumeCount >= this.countMoreThanEqual.value,
      shelf => shelf.title.toLowerCase().includes(this.searchTitle.value.toLowerCase())
    ];

    const filterManager = new FilterManager<Shelf>(controls, predicates, this.shelves);
    filterManager.changeFilterSub(shelves => {
      this.shelves = shelves;
    });
  }

  openDialog() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Add modal',
      childComponent: ShelfAdderComponent,
      data: this.shelves
    });
  }
}
