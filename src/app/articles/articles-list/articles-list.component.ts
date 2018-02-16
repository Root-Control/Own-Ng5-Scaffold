import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
	public articles;
	constructor(private service: ArticleService) {
		this.service = service;
	}

  ngOnInit() {
  	this.listArticles();
  }

  async listArticles() {
	this.service
		.list()
		.subscribe(res => {
			this.articles = res;
		});
  }
}
