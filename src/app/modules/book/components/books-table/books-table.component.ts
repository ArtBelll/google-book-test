import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../domain/book";
import {BookService} from "../../services/book.service";
import {FormControl} from "@angular/forms";
import {FilterManager} from "../../../../filter-manager";

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

  searchTitle = new FormControl('');
  ratingMoreThenEqual = new FormControl();
  searchAuthor = new FormControl('');
  isEbook = new FormControl();

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooksByShelf(this.shelfId)
      .subscribe(books => {
        this.books = books;
        this.setUpFilterManager();
      });
  }

  openPreview(book: Book) {
    this.isPreviewOpen = true;
    this.selectedBook = book;
  }

  private setUpFilterManager() {
    const controls = [this.searchTitle, this.ratingMoreThenEqual, this.searchAuthor, this.isEbook];
    const predicates: ((book: Book) => boolean)[] = [
      book => book.volumeInfo.title.toLowerCase().includes(this.searchTitle.value.toLowerCase()),
      book => this.ratingMoreThenEqual.value ? book.volumeInfo.averageRating >= this.ratingMoreThenEqual.value : true,
      book => book.volumeInfo.authors.reduce((a1, a2) => a1 + a2)
        .toLowerCase().includes(this.searchAuthor.value.toLowerCase()),
      book => this.isEbook.value ? book.saleInfo.isEbook === this.isEbook.value : true
    ];

    const filterManager = new FilterManager<Book>(controls, predicates, this.books);
    filterManager.changeFilterSub(books => {
      this.books = books;
    });
  }
}
