import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './components/login/login.component';
import { AppRootComponent } from './components/app-root/app-root.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
