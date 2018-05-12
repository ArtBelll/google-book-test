import {Component, Input, OnInit} from '@angular/core';
import {Shelf} from "../../domian/shelf";

@Component({
  selector: 'app-shelf-info',
  templateUrl: './shelf-info.component.html',
  styleUrls: ['./shelf-info.component.css']
})
export class ShelfInfoComponent implements OnInit {

  @Input() shelf: Shelf;

  constructor() { }

  ngOnInit() {
  }

}
