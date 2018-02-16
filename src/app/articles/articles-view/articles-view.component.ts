import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css']
})
export class ArticlesViewComponent implements OnInit {
	private sub: any;
	public articleId: number;
	public article;

	constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.articleId = params['articleId'];
			this.getArticleById();
		});
	}

	getArticleById() {
		this.articleService
			.getArticle(this.articleId)
			.subscribe(article => {
				this.article = article;
				console.log('aca el article');
				console.log(this.article);
			});
	}
}
