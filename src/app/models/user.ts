export class User {
	static mapUser(data: any): User {
		const serializedUser = new User(
			data.user.displayName,
			data.user.email,
			data.user.firstName,
			data.user.lastName,
			data.user.languagePreference,
			data.user.profileImageURL,
			data.user.roles,
			data.user.updated,
			data.user.username,
			data.user._id
		);
		return serializedUser;
	}

	constructor(
		public displayName: string,
		public email: string,
		public firstName: string,
		public lastName: string,
		public languagePreference: string,
		public profileImageURL: string,
		public roles: Array<() => void>,
		public updated: Date,
		public username: string,
		public _id: string
	){}
}
