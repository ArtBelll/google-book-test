import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShelfService} from './services/shelf.service';
import {ShelfComponent} from './components/shelf/shelf.component';
import {ShelvesGroupComponent} from './components/shelves-group/shelves-group.component';
import {AsyncLimitPipe} from '../../pipes/async-limit-pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShelfComponent,
    ShelvesGroupComponent,
    AsyncLimitPipe
  ],
  providers: [
    ShelfService
  ],
  exports: [
    ShelvesGroupComponent
  ]
})
export class ShelfModule {
}
