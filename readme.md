## Pogdesign/cat scraper
Utlizes babel on client and server with some experimental transformers (asycn/await).

This will scrape pogdesign.co.uk/cat for all tv shows, then sort them by discern popularity when route "/" is visited.

Currently scrapes:
- Popularity
- Name
- Show summary url

Todo:
- Replace `lance`
	+ Use `express`
	+ Use `grunt` for static assets
		* Populate `/client/dist`
	+ Refactor `package.json` to reflect changes
- Impliment `jslint` config
