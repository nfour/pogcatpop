import Scraper from '../Scraper'
import path from 'path'

export default class PopularityScraper {
	constructor() {
		this.indexPageUrl	= "http://www.pogdesign.co.uk/cat/showselect.php";
		this.baseUrl		= "http://www.pogdesign.co.uk/cat/";
	}
	
	async get() {
		let { $ } = await new Scraper( this.indexPageUrl ).get();

		this.results = {};
		
		$(".shwslc .selectgrp .slink").each( (index, item) => {
			var $item = $(item);
			console.log($item)
			
			var pageUrl = path.join( this.baseUrl, $item.attr('href') );
			
			this.results[ pageUrl ] = {
				pageUrl, $item
			}
		})
		
		console.log(this.results);
		
		return null
	}
}