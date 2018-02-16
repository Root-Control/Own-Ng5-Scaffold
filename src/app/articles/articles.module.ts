import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ArticleService } from './articles.service';

import { articleRoutes } from './articles.routes';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(articleRoutes, { useHash: false })
  ],
  exports: [RouterModule],
  providers: [ArticleService],
  declarations: [ArticlesFormComponent, ArticlesListComponent, ArticlesViewComponent]
})
export class ArticlesModule { }
