import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookGroupComponent } from './components/book-group/book-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {BookService} from './services/book.service';
import { BooksPreviewComponent } from './components/books-preview/books-preview.component';
import { BooksPageComponent } from './components/books-page/books-page.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule
  ],
  declarations: [
    BookComponent,
    BookGroupComponent,
    BooksPreviewComponent,
    BooksPageComponent
  ],
  providers: [
    BookService
  ],
  exports: [
    BookGroupComponent
  ]
})
export class BookModule { }
