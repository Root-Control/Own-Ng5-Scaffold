import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class InterceptorService implements HttpInterceptor {
	constructor(public auth: AuthenticationService) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: { Authorization: JSON.parse(`${this.auth.getToken()}`) || '' }
		});
		return next.handle(request);
	}
}