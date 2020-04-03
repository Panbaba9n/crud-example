import { InMemoryDbService, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { Article } from '../shared/interfaces/article';
import { environment } from '../../environments/environment';


export const dataBaseConfig: InMemoryBackendConfigArgs = {
  delay: environment.inMemoryDataBase.delay,
  passThruUnknownUrl: true,
  rootPath: environment.inMemoryDataBase.root,
};

export class DataBaseService implements InMemoryDbService {
  createDb() {
    const article: Article[] = [
      { id: 101, title: 'Angular title', category: 'Angular' },
      { id: 102, title: 'Javascript title', category: 'Javascript' },
      { id: 103, title: 'Angular second title', category: 'Angular' },
    ];

    return { article };
  }

  // IF id is numeric, genIdDefault implementation works
  // genId(articles: Article[]): number {
  //   return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 101;
  // }
}
