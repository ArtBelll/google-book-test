import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../domain/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() shelfId: number;

  books: Book[];

  selectedBook: Book;
  isPreviewOpen = false;

  currentPage = 1;
  itemsPerPage = 5;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooksByShelf(this.shelfId)
      .subscribe(books => this.books = books);
  }

  openPreview(book: Book) {
    this.isPreviewOpen = true;
    this.selectedBook = book;
  }
}
