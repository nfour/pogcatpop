import Promise from 'bluebird'
import request from 'request-promise'
import cheerio from 'cheerio'

export default class Scraper {
	constructor(url) {
		this.url = url;
	}
	
	async get() {
		let body = await request.get(this.url);
		
		var $ = cheerio.load(body);
		
		return { $, body };
	}
	
}