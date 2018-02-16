import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public islogged: boolean;
	private token: string;
	public user: {}

	constructor(private auth: AuthenticationService) {
		this.islogged = false;
		this.user = {};
	}

	async ngOnInit() {
		this.token = this.auth.getToken();
		if(this.token) await this.loggedUser();
	}

	loggedUser () {
		this.auth.me(JSON.parse(this.token))
			.subscribe(user => {
				this.islogged =  true;
				this.user = user;
			});
	}
}
