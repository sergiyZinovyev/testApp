import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable} from 'rxjs'; 
import {map} from 'rxjs/operators';
import {Article} from './article.model';
 
@Injectable()
export class NewsapiService {

  apiKey: string = 'b0ea3e22738349f5a5e14ddf35c89298';
  country: string = 'us';
  url: string = `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient){}

  getNews(): Observable<Article[]>{
    return this.http.get<{articles:Array<any>, status: string, totalResults: number}>(this.url)
      .pipe(map(data => data.articles.map(article => new Article(article))));
  }
}

