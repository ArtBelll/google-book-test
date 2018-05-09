import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShelfService} from './services/shelf.service';
import {ShelfComponent} from './components/shelf/shelf.component';
import {ShelvesGroupComponent} from './components/shelves-group/shelves-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {ShelvesPageComponent} from './components/shelves-page/shelves-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShelfPreviewComponent } from './components/shelf-preview/shelf-preview.component';
import { ShelfViewComponent } from './components/shelf-view/shelf-view.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ShelfComponent,
    ShelvesGroupComponent,
    ShelvesPageComponent,
    ShelfPreviewComponent,
    ShelfViewComponent
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
