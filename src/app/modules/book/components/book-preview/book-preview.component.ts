import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../domain/book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() isControlButton = false;

  constructor() { }

  ngOnInit() {
  }

}
