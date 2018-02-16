import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { rootRouterConfig } from './app.routes';
import { HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//  Services
import { AuthenticationService } from './authentication/authentication.service';
import { InterceptorService } from './interceptor.service';
import { AuthenticationGuard } from './guards/authentication-guard.service';

import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

//	Modules
import { SharedModule } from './shared/shared.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
  	HttpModule,
    SharedModule,
  	ArticlesModule,
    AuthenticationModule,
  	FormsModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }, AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
