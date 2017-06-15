import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import SavedArticles from './SavedArticles';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

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
			articles: []
		}
		this.handleTopic = this.handleTopic.bind(this);
		this.handleStartYear = this.handleStartYear.bind(this);
		this.handleEndYear = this.handleEndYear.bind(this);
		this.getData = this.getData.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
		this.getSavedArticles = this.getSavedArticles.bind(this);
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
			responseType: 'json'})
		.then(data => { 
			const dataToBeRendered = [];
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

	saveArticle(article){
		axios({
			method:'post',
			baseURL: '/api',
			data: {
				data: article
			}
		})
	}

	getSavedArticles(){
		axios({
			method:'get',
			baseURL:'/api',
		}).then(data => {
			const savedData = [];
			savedData.push(data);
			return savedData;
		})
	}
	
    render() {
	    return (
	    	<Router>
		    	<div style={bodyStyle}>
		    		<Header />
		    		<Route path="/" 
		    			exact={true} 
		    			render={() =>
			    			<div> 
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
					    		 	saveArticle ={this.saveArticle}
					    		 />
					    	</div>
				    	}
				    />
		    		<Route path='/search' 
		    			exact={true} 
		    			render={() => 
		    				<div>
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
					    		 	saveArticle ={this.saveArticle}
					    		 />
					    	</div>
		    			 
		    				
		    		}
		    		/>
		    		<Route path='/saved'
		    			exact={true}
		    			component={SavedArticles}
		    			getSavedArticles={this.getSavedArticles}
		    		/>
		    	</div>
	    	</Router>
	    )
    }
}