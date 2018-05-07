import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShelfService} from './services/shelf.service';
import {ShelfComponent} from './components/shelf/shelf.component';
import {ShelvesGroupComponent} from './components/shelves-group/shelves-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule
  ],
  declarations: [
    ShelfComponent,
    ShelvesGroupComponent
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
