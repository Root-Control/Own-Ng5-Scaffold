import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articles.service';


@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent implements OnInit {
  public article;
  constructor(private service: ArticleService) {
    this.article = {};
  }

  ngOnInit() { }

  newArticle() {
  	this.service.create(this.article)
  		.subscribe(res => {
  			console.log(res);
  		});
  }

}
