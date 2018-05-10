import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {AccountComponent} from './components/account/account.component';
import {TokenGuard} from './guards/token.guard';
import {WelcomComponent} from './components/account/welcom/welcom.component';
import {ShelvesPageComponent} from "./modules/shelf/components/shelves-page/shelves-page.component";
import {ShelfViewComponent} from "./modules/shelf/components/shelf-view/shelf-view.component";
import {BookViewComponent} from "./modules/book/components/book-view/book-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'save-token',
    component: SaveTokenComponent
  },
  {
    path: 'account',
    canActivate: [TokenGuard],
    component: AccountComponent,
    children: [
      {
        path: '',
        component: WelcomComponent
      },
      {
        path: 'shelves',
        component: ShelvesPageComponent
      },
      {
        path: 'shelf/:id',
        component: ShelfViewComponent
      },
      {
        path: 'book/:id',
        component: BookViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
