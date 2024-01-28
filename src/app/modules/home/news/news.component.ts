import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input() autoNewsComponent!: { [key: string]: any } | null;

  get latestNews(): { [key: string]: any }[] {
    return this.autoNewsComponent?.['data'].latest_news;
  }

  get mostReadNews(): { [key: string]: any }[] {
    let lostReadNews = this.autoNewsComponent?.['data'].most_read_news;
    return lostReadNews.slice(0, -1);
  }

  get listNews() {
    return this.latestNews.slice(1);
  }

  get mainNews(): { [key: string]: any } {
    return this.latestNews[0];
  }
}
