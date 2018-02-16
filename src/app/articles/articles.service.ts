import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {
	private path: string;

	constructor(private http: HttpClient, private request: RequestOptions) {
		this.path = `${environment.basepath}/api/articles`;
	}

	list() : Observable<Article[]> {
		return this.http.get(`${this.path}`)
			.map((data: any) => {
				const results: Article[] = data;
				return results.map((articles: Article) => Article.mapArticle(articles));
			})
			.catch((e: any) => Observable.throw(this.errorHandler(e)));
	}


	create(article) : Observable<Article> {
		let data = Article.mapArticle(article);
		return this.http.post(`${this.path}`, data)
			.map((data: any) => {
				const results: Article = data;
				const response = Article.mapArticle(results);
				return response;
			});
	}

	getArticle(articleId) {
		return this.http.get(`${this.path}/${articleId}`)
			.map((data: any) => {
				const results: Article[] = data;
				return Article.mapArticle(results);
			})
			.catch((e: any) => Observable.throw(this.errorHandler(e)));		
	}

	errorHandler(error: any): void {
		console.log(error)
	}

}
