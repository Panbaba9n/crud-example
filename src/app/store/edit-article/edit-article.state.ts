export interface EditArticleState {
  articleIsUpdating: boolean;
  id: string | number;
  title: string;
  category: string;
}

export const initialState: EditArticleState = {
  articleIsUpdating: false,
  id: '',
  title: '',
  category: '',
};
