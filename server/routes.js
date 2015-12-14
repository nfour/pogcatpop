import PopScraper from './handlers/catalog/Popularity'

export default [
	[ "GET", "/", async function(o) {
		let data = { };
		
		
		let scraper = new PopScraper("http://www.pogdesign.co.uk/cat/showselect.php");
		
		await scraper.get()
		
		o.serve.template('index', data);
	}]
]