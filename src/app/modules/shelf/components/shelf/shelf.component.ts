import {Component, Input, OnInit} from '@angular/core';
import {Shelf} from '../../domian/shelf';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  @Input() shelf: Shelf;

  constructor() { }

  ngOnInit() {
  }

}
