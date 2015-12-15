import Scraper from '../Scraper'
import nodeUrl from 'url'
import Promise from 'bluebird'

export default class ShowsScraper {
	constructor() {
		this.indexPageUrl	= "http://www.pogdesign.co.uk/cat/showselect.php";
		this.baseUrl		= "http://www.pogdesign.co.uk/cat/";
	}
	
	async readIndex() {
		let { $ } = await new Scraper( this.indexPageUrl ).get();

		this.shows = {};
		
		$(".shwslc .selectgrp .slink").each( (index, item) => {
			var $item = $(item);
			
			var pageUrl = nodeUrl.resolve( this.baseUrl, $item.attr('href') );
			
			this.shows[ pageUrl ] = { url: pageUrl };
		})
		
		let awaiting	= [];
		let delay		= 0;
		let delayIncr	= 50;
		
		for (let key in this.shows) {
			awaiting.push(
				Promise.delay(delay).then(() => {
					return this.readShowPage( this.shows[key] );
				})
			);
			
			delay += delayIncr
		}
		
		await Promise.all(awaiting)
		
		return this.shows
	}
	
	async readShowPage(show) {
		let { url } = show;
		
		let { $ } = await new Scraper( url ).get();
		
		show.popularity	= ( $('.sumbox .sumdata + h3 span').text() || '' ).replace(/[^\d]/g, '');
		show.name		= $('[itemprop=name]').text()
		
		return show;
	}
}