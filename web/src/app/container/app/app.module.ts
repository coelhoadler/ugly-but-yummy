import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@components/header/header.module';
import { AppContainer } from './app.container';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  bootstrap: [AppContainer]
})
export class AppModule { }
