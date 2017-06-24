import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import {JuriNameValidator } from './app.directive'


@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,JuriNameValidator  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
