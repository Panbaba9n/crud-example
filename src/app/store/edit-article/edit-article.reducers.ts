import { Action, createReducer, on } from '@ngrx/store';
import * as EditArticleActions from './edit-article.actions';
import { EditArticleState, initialState } from './edit-article.state';

export const editArticleFeatureKey = 'editArticle';

const editArticleReducer = createReducer(
  initialState,
  on(EditArticleActions.editArticle, (state: EditArticleState, { id, title, category }: Partial<EditArticleState>) => ({
    ...state,
    articleIsUpdating: true,
    id,
    title,
    category
  })),
  on(EditArticleActions.editArticleFinished, (state: EditArticleState) => ({
    ...initialState
  }))
);

export function reducer(state: EditArticleState, action: Action) {
  return editArticleReducer(state, action);
}
