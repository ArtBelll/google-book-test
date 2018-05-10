import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../domain/book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  @Input() book: Book;
  @Input() shelfId;

  constructor() { }

  ngOnInit() {
  }

}
