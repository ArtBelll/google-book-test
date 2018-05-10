import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookGroupComponent } from './components/book-group/book-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {BookService} from './services/book.service';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule,
    NgxPaginationModule
  ],
  declarations: [
    BookComponent,
    BookGroupComponent,
    BooksTableComponent,
    BookPreviewComponent
  ],
  providers: [
    BookService
  ],
  exports: [
    BookGroupComponent,
    BooksTableComponent
  ]
})
export class BookModule { }
