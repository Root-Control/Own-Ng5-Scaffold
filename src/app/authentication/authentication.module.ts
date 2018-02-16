import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './authentication.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '../authentication/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(authRoutes, { useHash: false })
  ],
  exports: [RouterModule],
  providers : [AuthenticationService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
