import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { editArticleFeatureKey, reducer } from './edit-article.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(editArticleFeatureKey, reducer)
  ]
})
export class EditArticleStateModule { }
