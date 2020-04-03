import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

import { Article } from '../shared/interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends EntityCollectionServiceBase<Article> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Article', serviceElementsFactory);
  }

}
