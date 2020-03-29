import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../shared/interfaces/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  articleForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
  articleIsUpdating = false;
  isLoading = false;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles()
      .subscribe(res => this.articles = res);
  }

  trackByArticles(index: number, article: Article): number {
    return article.id;
  }

  edit(article: Article) {
    this.articleIsUpdating = true;
    this.articleForm.setValue(article);
    // Actually article shouldn't be loaded from BD.
    // It's already in component list. Unless it is mutaded/mapped.
    // this.articleService.getArticleById(article.id)
    //   .subscribe(article => console.log('edit article: ', article));
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article)
      .subscribe(() => this.articles = this.articles.filter(a => a !== article));
  }

  onSubmit() {
    if (this.articleForm.invalid) {
      return;
    }
    this.isLoading = true;

    const articleFormValues = this.articleForm.value;
    const article = {};
    for (let value in articleFormValues) {
      article[value] = (value === 'id') ? articleFormValues[value] : articleFormValues[value].trim();
    }

    this.articleForm.reset();

    if (this.articleIsUpdating) {
      // Update Article
      this.articleIsUpdating = false;

      this.articleService.updateArticle(article as Article)
        .subscribe(() => {
          this.isLoading = false;
          this.getArticles()
        });
    } else {
      // Create Article
      this.articleService.addArticle(article as Article)
        .subscribe(article => {
          this.isLoading = false;
          this.articles.push(article);
        });
    }
  }

  cancelEditting() {
    this.articleIsUpdating = false;
  }

}
