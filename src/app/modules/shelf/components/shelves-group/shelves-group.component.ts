import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Shelf} from '../../domian/shelf';
import {ShelfService} from '../../services/shelf.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-shelves-group',
  templateUrl: './shelves-group.component.html',
  styleUrls: ['./shelves-group.component.css']
})
export class ShelvesGroupComponent implements OnInit {

  shelves: Observable<Shelf[]>;

  constructor(private shelfService: ShelfService) { }

  ngOnInit() {
    this.shelves = this.shelfService.getAllShelves();
  }

}
