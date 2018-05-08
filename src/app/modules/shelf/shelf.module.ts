import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShelfService} from './services/shelf.service';
import {ShelfComponent} from './components/shelf/shelf.component';
import {ShelvesGroupComponent} from './components/shelves-group/shelves-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {ShelvesPageComponent} from './components/shelves-page/shelves-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    ShelfComponent,
    ShelvesGroupComponent,
    ShelvesPageComponent
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
