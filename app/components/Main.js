import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import SavedArticles from './SavedArticles';
import axios from 'axios';

const dataToBeRendered = [];
const bodyStyle = {
	padding: "2%"
}
export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			q: '',
			begin_date:'',
			end_date:'',
			articles: dataToBeRendered
		}
		this.handleTopic = this.handleTopic.bind(this);
		this.handleStartYear = this.handleStartYear.bind(this);
		this.handleEndYear = this.handleEndYear.bind(this);
		this.getData = this.getData.bind(this);
	}
	handleTopic(e){
		this.setState({
			q: e.target.value
		})
	}
	handleStartYear(e){
		this.setState({
			begin_date: e.target.value
		})
	}
	handleEndYear(e){
		this.setState({
			end_date: e.target.value
		})
	}
	// put in ajaxCalls.js make a utils folder
    getData(e){ 
		e.preventDefault();
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
			const dataArr = data.data.response.docs;
			dataArr.forEach(article => {
				dataToBeRendered.push({
					web_url: article.web_url,
					snippet: article.snippet,
					pub_date: article.pub_date
				});
			});
			this.setState({
				articles: dataToBeRendered,
				q:" ",
				begin_date: " ",
				end_date: " "
			});

		}); 
	}

    render() {
	    return (
	    	<div style={bodyStyle} >
	    		<Header />
	    		<Search 
	    			onSearch={this.getData}
	    			topicChanged={this.handleTopic}
	    			startYearChanged={this.handleStartYear}
	    			endYearChanged={this.handleEndYear}
	    			q={this.state.q}
	    			begin={this.state.begin_date}
	    			end={this.state.end_date}
	    		 />
	    		 <Results 
	    		 	articles={this.state.articles}
	    		 />
	    		<SavedArticles />
	    	</div>
	    )
    }
}