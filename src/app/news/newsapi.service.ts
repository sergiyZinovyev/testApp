import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable} from 'rxjs'; 
import {map} from 'rxjs/operators';
import {Article} from './article.model';
 
@Injectable()
export class NewsapiService {

  url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=b0ea3e22738349f5a5e14ddf35c89298';

  constructor(private http: HttpClient){}

  getNews(): Observable<Article[]>{
    return this.http.get<{articles:Array<any>, status: string, totalResults: number}>(this.url)
      .pipe(map(data => data.articles.map(singleUser => new Article(singleUser))));
  }
}

