import { Component, OnInit } from '@angular/core';
import {NewsapiService} from './newsapi.service';
import {Article} from './article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsApi: NewsapiService) { }

  newsList: Article[] = []

  ngOnInit() {
    this.getNews()
  }
 
  getNews(){
    return this.newsApi.getNews().subscribe(data =>{
      console.log(data);
      this.newsList = [...data];
    })
  } 
 
}
