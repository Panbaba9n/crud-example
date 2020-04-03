import { createSelector, createFeatureSelector } from '@ngrx/store';

import { EditArticleState } from './edit-article.state';
import { editArticleFeatureKey } from './edit-article.reducers';

export const getHomePageStore = createFeatureSelector(editArticleFeatureKey);

export const getArticleIsUpdatingSelector = createSelector(
  getHomePageStore,
  (store: EditArticleState) => store.articleIsUpdating
);

export const getArticleSelector = createSelector(
  getHomePageStore,
  (store: EditArticleState) => ({
    id: store.id,
    title: store.title,
    category: store.category
  })
);
