import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Temporary DB
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataBaseService } from './services/data-base.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataBaseService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
