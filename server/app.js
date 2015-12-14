import Lance from 'lance'

import config from './data/config'
import routes from './routes'

const A = async function() {
	config.lance.routes = routes;
	
	A.lance = new Lance( config.lance );
	
	await A.lance.initialize();
	
	console.log('ready');
}

export default A

A()
