import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public credentials;
	private returnUrl: string;

	constructor(private authentication: AuthenticationService, private route: ActivatedRoute, private router: Router) {
		this.credentials = {};
	}

	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	async login() {
		this.authentication
			.login(this.credentials)
			.subscribe(res => {
				this.router.navigateByUrl(this.returnUrl);
			});
	}
}
