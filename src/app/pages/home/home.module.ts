import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditArticleStateModule } from '../../store/edit-article';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFormComponent } from './home-form/home-form/home-form.component';


@NgModule({
  declarations: [HomeComponent, HomeFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, // TODO: move to shared
    EditArticleStateModule
  ]
})
export class HomeModule { }
