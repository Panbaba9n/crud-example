import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Article } from '../shared/interfaces/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = `${environment.apiUrl}articles`;

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
      .pipe(
        tap(articles => {
          if (!environment.production) {
            console.log('Articles: ', articles)
          }
        }),
        catchError(this.handleError<Article[]>('getArticles', []))
      );
  }

  // Don't need it for now
  // getArticleById(id: number): Observable<Article> {
  //   return this.http.get<Article>(`${this.articleUrl}/${id}`)
  //     .pipe(
  //       catchError(this.handleError<Article>(`getArticleById id=${id}`))
  //     );
  // }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, article)
      .pipe(
        tap((newArticle: Article) => console.log(`added article id=${newArticle.id}`)),
        catchError(this.handleError<Article>('addArticle'))
      );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.articleUrl, article)
      .pipe(
        catchError(this.handleError<Article>('updateArticle'))
      );
  }

  deleteArticle(article: Article): Observable<Article> {
    return this.http.delete<Article>(`${this.articleUrl}/${article.id}`)
      .pipe(
        catchError(this.handleError<Article>('deleteArticle'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      if (result) {
        return of(result as T);
      }
      return throwError(error);
    };
  }
}
