import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {UserComponent} from './components/user/user.component';
import {TokenGuard} from './guards/token.guard';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
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
    path: 'user',
    canActivate: [TokenGuard],
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
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
