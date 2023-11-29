import { Component } from '@angular/core';
import { newsData } from "./newsData";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news = newsData;
  
}
