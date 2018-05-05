import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { AppRootComponent } from './app-root/app-root.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
