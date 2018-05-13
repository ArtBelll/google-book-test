import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Shelf} from "../../domian/shelf";
import {BookService} from "../../../book/services/book.service";

@Component({
  selector: 'app-shelf-preview',
  templateUrl: './shelf-preview.component.html',
  styleUrls: ['./shelf-preview.component.css']
})
export class ShelfPreviewComponent implements OnChanges {

  @Input() shelf: Shelf;
  bookImage: string;

  constructor(private bookService: BookService) {
  }

  ngOnChanges() {
    if (this.shelf.id) {
      this.bookService.getBooksByShelfAndMax(this.shelf.id, 1)
        .subscribe(book => {
          this.bookImage = book ? book[0].volumeInfo.imageLinks.thumbnail : null;
        });
    } else {
      this.bookImage = null;
    }
  }
}
