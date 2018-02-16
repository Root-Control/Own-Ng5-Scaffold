import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let islogged =  this.authenticationService.isLoggedIn();
    if(islogged) return true;
    else {
        this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url }});
    }
    return false;
  }
}
