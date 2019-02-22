import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './message/send/send.component';
import { Page2Component } from './page1/page2/page2.component';
import { Component1Component } from './eventEmmiterUsingServces/component1/component1.component';
import { Component2Component } from './eventEmmiterUsingServces/component2/component2.component';
import { ViewHandlerComponent } from './eventEmmiterUsingServces/view-handler/view-handler.component';
import { HtmlReferenceComponent } from './referencePassing/html-reference/html-reference.component';
import { RightCompComponent } from './referencePassing/html-reference/right-comp/right-comp.component';
import { LeftCompComponent } from './referencePassing/html-reference/left-comp/left-comp.component';
 

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NavbarComponent,
    HomeComponent,
    MessageComponent,
    SendComponent,
    Component1Component,
    Component2Component,
    ViewHandlerComponent,
    HtmlReferenceComponent,
    RightCompComponent,
    LeftCompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
