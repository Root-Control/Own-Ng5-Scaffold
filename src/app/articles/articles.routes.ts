import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { AuthenticationGuard } from '../guards/authentication-guard.service';

export const articleRoutes = [
    {
        path: 'articles', children: [
            { path: '', component: ArticlesListComponent },
        	{ path: 'create', component: ArticlesFormComponent, canActivate: [AuthenticationGuard] },
        	{ path: ':articleId', component: ArticlesViewComponent }
        ]
    },
];