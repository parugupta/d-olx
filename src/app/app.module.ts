import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
