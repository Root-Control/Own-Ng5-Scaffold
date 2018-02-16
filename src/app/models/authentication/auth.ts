import { User } from '../user';

export class LoginForm {
	static mapLoginForm(data: any): LoginForm {
		const loginForm = new LoginForm(
			data.usernameOrEmail,
			data.password
		);
		return loginForm;
	}

    constructor(public usernameOrEmail: string, public password: string) {}	
}

export class ProcessToken {
	static mapToken(data: any): ProcessToken {
		const authenticated = JSON.parse(data._body);
		const serializedUser = new ProcessToken(authenticated.user);

		localStorage['token'] = JSON.stringify(authenticated.accessToken);
		return serializedUser;
	}

	constructor(
		public user: User
	){}
}