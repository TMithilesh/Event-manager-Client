import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {EventComponent } from './event.component';
import {EventService } from './event.service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { TableRenderComponent } from './table-render/table-render.component';
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailComponent,
    TableRenderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot
    ([
    {
      path: 'eventDetail/:id/:name/:owner',
      component: EventDetailComponent
    },
      {
       path: '',
      component: EventComponent
      },
      {
       path: '**',
      component: EventComponent
      }
  ])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
