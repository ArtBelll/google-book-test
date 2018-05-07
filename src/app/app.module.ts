import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import {LoginComponent} from './components/login/login.component';
import {AppRootComponent} from './components/app-root/app-root.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginService} from './services/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SaveTokenComponent} from './components/save-token/save-token.component';
import {CookieModule} from 'ngx-cookie';
import {TokenService} from './services/token.service';
import {UserComponent} from './components/user/user.component';
import {TokenGuard} from './guards/token.guard';
import {MainComponent} from './components/main/main.component';
import {APIInterceptor} from './api-interceptor';
import {ShelfModule} from './modules/shelf/shelf.module';
import {AsyncLimitPipe} from "./pipes/async-limit-pipe";


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
    AppRoutingModule,
    ShelfModule
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
