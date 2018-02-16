import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LoginForm, ProcessToken } from '../models/authentication/auth';
import { Headers, RequestOptions, Response, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {
	private path: string;
	private loginPath;

	constructor(private http: Http, private router: Router) {
		this.path = `${environment.basepath}`;
	}

	login(credentials) : Observable<any> {
		let url = `${this.path}${environment.auth.login}`;
		let data = LoginForm.mapLoginForm(credentials);

		return this.http.post(url, data)
			.map((data: any) => {
				const results: ProcessToken = data;
				const response = ProcessToken.mapToken(results);
				return response;
			});
	}

	register() {

	}

	me(token) {
		let url = `${this.path}/api/users/me?token=${token}`;
		return this.http.get(url)
			.map((data: any) => {
				return JSON.parse(data._body);
			})
			.catch(async (e: any) => {
				const errorResponse = JSON.parse(e._body);
				await this.isNotLoggedIn();
				return Observable.of(errorResponse);
			});
	}

	getToken(): string {
		return localStorage.getItem('token');
	}

	isLoggedIn(): boolean {
		const token = this.getToken();
		if(token) return true;
		else return false;
	}

	isNotLoggedIn() {
		localStorage.removeItem('token');
	}
}
