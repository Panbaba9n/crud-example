import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import {
  EditArticleState,
  getArticleSelector,
  getArticleIsUpdatingSelector,
  editArticleFinished
} from '../../../../store/edit-article';
import { ArticleService } from '../../../../services/article.service';
import { Article } from '../../../../shared/interfaces/article';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit, OnDestroy {
  articleForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
  articleIsUpdating: boolean;
  editedArticle: Observable<Article>;
  loading$: Observable<boolean>;

  constructor(
    private articleService: ArticleService,
    private store: Store<EditArticleState>
  ) { }

  ngOnInit() {
    this.loading$ = this.articleService.loading$;

    this.store.pipe(select(getArticleSelector))
      .subscribe(article => this.articleForm.setValue(article));

    this.store.pipe(select(getArticleIsUpdatingSelector))
      .subscribe(value => this.articleIsUpdating = value);
  }

  ngOnDestroy() {
    this.store.dispatch(editArticleFinished());
  }

  createArticle(article: Article) {
    this.articleService.add(article);
  }

  updateArticle(article: Article) {
    this.articleService.update(article);
    this.store.dispatch(editArticleFinished());
  }

  onSubmit() {
    if (this.articleForm.invalid) {
      return;
    }

    const articleFormValues = this.articleForm.value;
    const article = {};
    for (const key of Object.keys(articleFormValues)) {
      const value = articleFormValues[key];

      if (key === 'id') {
        if (value > 0) {
          article[key] = value;
        }
        // must be skipped if no data in 'id' --- create article case

      } else {
        article[key] = value.trim();
      }
    }

    this.articleForm.reset();

    if (this.articleIsUpdating) {
      this.updateArticle(article as Article);
    } else {
      this.createArticle(article as Article);
    }
  }

  cancelEditting() {
    this.store.dispatch(editArticleFinished());
  }
}
