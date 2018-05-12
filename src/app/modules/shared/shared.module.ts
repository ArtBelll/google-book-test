import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShelfInfoComponent} from "../shelf/components/shelf-info/shelf-info.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShelfInfoComponent
  ],
  exports: [
    ShelfInfoComponent
  ]
})
export class SharedModule { }
