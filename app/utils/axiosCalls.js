import axios from 'axios';

const getData = (e) => { 
	e.preventDefault(); 
	console.log(formValues, "something in there is wrong")
	let formValues = this.state;
	let params = Object.assign(formValues, {'api-key': "1a4eb9efe5cb45c3b875a4fcef1683ca"}) 
	params.begin_date = `${params.begin_date}0101`; 
	params.end_date = `${params.end_date}1231`; 
	axios({ 
		method:'get', 
		baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?`, 
		params: params, 
		responseType: 'json', })
	.then(data => { 
		console.log(`data: ${JSON.stringify(data, null, 2)}`); 
	}); 
}

export default getData