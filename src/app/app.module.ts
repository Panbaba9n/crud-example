import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Temporary DB
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataBaseService, dataBaseConfig } from './services/data-base.service';

// NgRx Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEntityDataModule } from './store/app-entity-data/app-entity-data.module';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataBaseService, dataBaseConfig),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppEntityDataModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
