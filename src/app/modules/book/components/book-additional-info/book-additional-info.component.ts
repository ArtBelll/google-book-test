import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../domain/book";

@Component({
  selector: 'app-book-additional-info',
  templateUrl: './book-additional-info.component.html',
  styleUrls: ['./book-additional-info.component.css']
})
export class BookAdditionalInfoComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
