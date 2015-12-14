export default {
	lance: {
		root: require('path').dirname(__dirname),
		
		server: {
			host: "0.0.0.0",
			port: 1337,
			
			static: true
		},
		
		templater: {
			findIn: "../client/",
			saveTo: "../client/public",
			
			bundles: {
				"style.css"	: "./styles/style.styl"
			},
			
			templater: {
				engine	: require('jade'),
				ext		: '.jade',
				findIn	: "./views",
			}
		}
	}
}