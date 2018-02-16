import { Routes } from '@angular/router'

//  Components
import { AppComponent } from './app.component'

export const rootRouterConfig: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'articles', loadChildren: './articles#ArticlesModule'},
	{ path: 'authentication', loadChildren: './authentication#AuthenticationModule'}
];
