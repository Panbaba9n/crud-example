import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Article } from '../shared/interfaces/article';

export class DataBaseService implements InMemoryDbService {
  createDb() {
    const articles: Article[] = [
      { id: 101, title: 'Angular title', category: 'Angular' },
      { id: 102, title: 'Javascript title', category: 'Javascript' },
      { id: 103, title: 'Angular second title', category: 'Angular' },
    ];

    return { articles };
  }

  // IF id is numeric, genIdDefault implementation works
  // genId(articles: Article[]): number {
  //   return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 101;
  // }
}
