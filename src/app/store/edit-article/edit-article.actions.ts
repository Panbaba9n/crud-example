import { createAction, props } from '@ngrx/store';

import { Article } from '../../shared/interfaces/article';

export const editArticle = createAction(
  '[Home Page] Update Article',
  props<Article>()
);

export const editArticleFinished = createAction(
  '[Home Page] Update Article Finished'
);
