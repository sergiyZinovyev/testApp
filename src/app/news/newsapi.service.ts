import { Injectable } from '@angular/core';
import { NewsModule } from './news.module';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
 
// @Injectable({
//   providedIn: NewsModule
// })
export class NewsapiService {

  url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=b0ea3e22738349f5a5e14ddf35c89298';

  constructor(private http: HttpClient){}

  getNews(): Observable<any>{
    return this.http.get(this.url);
  }
}

