import ShowScraper from './handlers/scrapers/Shows'

let cache = {}

export default [
	[ "GET", "/", async function(o) {
		let data = {};
		
		if ( cache.data ) {
			data = cache.data;
		} else {
			data.shows = await new ShowScraper("http://www.pogdesign.co.uk/cat/showselect.php").readIndex();
			cache.data = data
		}

		o.serve.template('index', data);
	}]
]