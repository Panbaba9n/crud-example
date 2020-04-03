import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { environment } from '../../../environments/environment';


const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  timeout: 30000,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})
export class AppEntityDataModule { }
