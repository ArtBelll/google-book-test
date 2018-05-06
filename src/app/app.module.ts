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


@NgModule({
  declarations: [
    LoginComponent,
    AppRootComponent,
    SaveTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [
    LoginService,
    TokenService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
