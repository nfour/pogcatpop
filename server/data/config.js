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
				"style.css"	: "./styles/style.styl",
				"app.js"	: "./scripts/app.js"
			},
			
			browserify: {
				transform: [
					"babelify"
				]
			},
			
			templater: {
				ext		: '.ect',
				findIn	: "../client/views",
				options: {
					open	: "<<",
					close	: ">>",
				}
			}
		}
	}
}