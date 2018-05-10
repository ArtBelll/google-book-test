import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book.service";
import {ShelfService} from "../../../shelf/services/shelf.service";
import {Shelf} from "../../../shelf/domian/shelf";
import {Book} from "../../domain/book";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  shelf: Shelf;
  book: Book;

  constructor(private route: ActivatedRoute,
              private shelfService: ShelfService,
              private bookService: BookService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const shelfId = params['shelfId'];
      const bookId = params['bookId'];
      this.bookService.getBook(bookId)
        .subscribe(book => {
          this.book = book;
        });
      this.shelfService.getShelves(shelfId)
        .subscribe(shelf => this.shelf);
    });
  }

}
