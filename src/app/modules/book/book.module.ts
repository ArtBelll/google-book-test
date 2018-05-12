import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookGroupComponent } from './components/book-group/book-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {BookService} from './services/book.service';
import { BooksTableComponent } from './components/books-table/books-table.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { BookViewComponent } from './components/book-view/book-view.component';
import { BookAdditionalInfoComponent } from './components/book-additional-info/book-additional-info.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    BookPreviewComponent,
    BookGroupComponent,
    BooksTableComponent,
    BookViewComponent,
    BookAdditionalInfoComponent
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
