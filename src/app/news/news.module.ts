import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {NewsapiService} from './newsapi.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule
  ],
  providers: [NewsapiService]
})
export class NewsModule { }
