import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticlesModule } from '../articles/articles.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationService } from '../authentication/authentication.service';



@NgModule({
  imports: [
    CommonModule,
    ArticlesModule,
    AuthenticationModule
  ],
  providers: [],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class SharedModule { }
