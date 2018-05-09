import {BrowserModule} from '@angular/platform-browser';


import {LoginComponent} from './components/login/login.component';
import {AppRootComponent} from './components/app-root/app-root.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginService} from './services/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {CookieModule} from 'ngx-cookie';
import {TokenService} from './services/token.service';
import {AccountComponent} from './components/account/account.component';
import {TokenGuard} from './guards/token.guard';
import {APIInterceptor} from './api-interceptor';
import {ShelfModule} from './modules/shelf/shelf.module';
import {NgModule} from '@angular/core';
import { WelcomComponent } from './components/account/welcom/welcom.component';
import {BookModule} from './modules/book/book.module';
import { NavbarComponent } from './components/account/navbar/navbar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    AppRootComponent,
    SaveTokenComponent,
    AccountComponent,
    WelcomComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    ShelfModule,
    BookModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    },
    TokenGuard,
    LoginService,
    TokenService,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
