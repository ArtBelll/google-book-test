import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShelfService} from "./services/shelf.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ShelfService
  ]
})
export class ShelfModule { }
