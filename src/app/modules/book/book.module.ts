import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookGroupComponent } from './components/book-group/book-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {BookService} from './services/book.service';

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule
  ],
  declarations: [
    BookComponent,
    BookGroupComponent
  ],
  providers: [
    BookService
  ],
  exports: [
    BookGroupComponent
  ]
})
export class BookModule { }
