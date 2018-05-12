import {Component, Input, OnInit} from '@angular/core';
import {Shelf} from '../../domian/shelf';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shelf-minimal',
  templateUrl: './shelf-minimal.component.html',
  styleUrls: ['./shelf-minimal.component.css']
})
export class ShelfMinimalComponent implements OnInit {

  @Input() shelf: Shelf;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openShelf(id: number) {
    this.router.navigate(['account/shelf', id]);
  }
}
