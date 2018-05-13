import {Component, ComponentRef, OnInit} from '@angular/core';
import {IModalDialog, IModalDialogButton, IModalDialogOptions} from "ngx-modal-dialog";
import {Shelf} from "../../domian/shelf";

@Component({
  selector: 'app-shelf-adder',
  templateUrl: './shelf-adder.component.html',
  styleUrls: ['./shelf-adder.component.css']
})
export class ShelfAdderComponent implements OnInit, IModalDialog {

  actionButtons: IModalDialogButton[];

  shelves: Shelf[];
  newShelf: Shelf = new Shelf();

  constructor() {
    this.actionButtons = [
      {
        text: 'Add',
        onAction: () => {
          this.newShelf.volumeCount = 0;
          this.newShelf.created = new Date();
          this.newShelf.updated = new Date();
          this.newShelf.volumesLastUpdated = new Date();
          this.shelves.push(this.newShelf);
          return true;
        }
      },
      {text: 'Close'}
    ];
  }

  ngOnInit() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    this.shelves = options.data;
  }
}
