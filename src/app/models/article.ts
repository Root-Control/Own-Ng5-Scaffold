import { User } from '../models/user';

export class Article {
	static mapArticle(data: any): Article {
		const article = new Article(
			data.title,
			data.content,
			data.created,
			data.user,
			data._id
		);
		return article;
	}

    constructor(
    	public title: string, 
    	public content: string, 
    	public created: Date, 
    	public user: Array<User>,
    	public _id: string
    ) {}	
}