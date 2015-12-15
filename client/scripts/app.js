let Sortable = require('sortable') 

export default new class App {
	constructor() {
		this.wew = 'lad';
		
		window.onload = () => {
			let table	= document.querySelector('#dataTable')
			let th		= document.querySelector('#dataTable th:first-child')
			
			Sortable.initTable( table )
			
			th.click()
		}

	}
}