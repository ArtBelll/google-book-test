import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {LoginComponent} from './components/login/login.component';
import {AppRootComponent} from './components/app-root/app-root.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {CookieModule} from 'ngx-cookie';
import {TokenService} from './services/token.service';
import {UserComponent} from './components/user/user.component';
import {TokenGuard} from './guards/token.guard';
import {MainComponent} from './components/main/main.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppRootComponent,
    SaveTokenComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CookieModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    TokenGuard,
    LoginService,
    TokenService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
