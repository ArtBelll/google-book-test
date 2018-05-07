import { Component, OnInit } from '@angular/core';
import {ShelfService} from "../../modules/shelf/services/shelf.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private shelfService: ShelfService) { }

  ngOnInit() {
    this.shelfService.getAllShelves()
      .subscribe(shelves => console.log(shelves));
  }

}
