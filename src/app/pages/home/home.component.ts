import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { EditArticleState, editArticle } from '../../store/edit-article';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../shared/interfaces/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$: Observable<Article[]>;
  loading$: Observable<boolean>;
  count$: Observable<number>;

  constructor(
    private articleService: ArticleService,
    private store: Store<EditArticleState>
  ) { }

  ngOnInit() {
    this.articles$ = this.articleService.entities$;
    this.loading$ = this.articleService.loading$;
    this.count$ = this.articleService.count$;

    this.getArticles();
  }

  getArticles() {
    this.articleService.getAll();
  }

  delete(article: Article) {
    this.articleService.delete(article.id);
  }

  edit(article: Article) {
    this.store.dispatch(editArticle(article));
  }

  trackByArticles(index: number, article: Article): number {
    return article.id;
  }

}
