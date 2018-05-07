import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {AccountComponent} from './components/account/account.component';
import {TokenGuard} from './guards/token.guard';
import {WelcomComponent} from './components/account/welcom/welcom.component';

const routes: Routes = [
  {
    path: '',
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
