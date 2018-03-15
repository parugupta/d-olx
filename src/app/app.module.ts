import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule } from '@angular/material';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DemoComponent } from './containers/demo/demo.component';

import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input-clearable.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DemoComponent,
    InputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
