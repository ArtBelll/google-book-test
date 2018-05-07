import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "../../domain/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-group',
  templateUrl: './book-group.component.html',
  styleUrls: ['./book-group.component.css']
})
export class BookGroupComponent implements OnInit {

  books: Observable<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getRecommendedBooks();
  }

}
