import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolisComponent } from './todolis/todolis.component';
import { TodoworkComponent } from './todowork/todowork.component';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { FormsModule } from '@angular/forms';
import { TotoeditComponent } from './totoedit/totoedit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolisComponent,
    TodoworkComponent,
    TodoaddComponent,
    TotoeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
