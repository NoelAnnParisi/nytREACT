import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Article from './Article';
import SavedArticles from './SavedArticles';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

const bodyStyle = {
    paddingLeft: "7%",
    paddingRight:"7%",
    paddingTop:'4%'
}
export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        q: '',
        begin_date:'',
        end_date:'',
        articles: [],
        savedData: [],
    }
    this.handleTopic = this.handleTopic.bind(this);
    this.handleStartYear = this.handleStartYear.bind(this);
    this.handleEndYear = this.handleEndYear.bind(this);
    this.getData = this.getData.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.update = this.update.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  // before the parent mounts fetch the sved articles and set state
  componentWillMount(){
    axios({
        method:'get',
        baseURL:'/api',
    }).then(response => {
        this.setState({
            savedData: response.data
        })
    })
  }
  // handlechange on topic input
  handleTopic(e){
    this.setState({
        q: e.target.value
    })
  }

  // handlechange on start year input
  handleStartYear(e){
    this.setState({
        begin_date: e.target.value
    })
  }

  // handlechange on end year input
  handleEndYear(e){
    this.setState({
        end_date: e.target.value
    })
  }

  // when the form is submitted make a get request to NYT API
  getData(e){ 
    e.preventDefault();
    let formValues = {
        q: this.state.q,
        begin_date: this.state.begin_date,
        end_date: this.state.end_date
    }
    let params = Object.assign(formValues, {'api-key': "8d32a9732f3f4185838455317f461bd3"}) 
    // make user experience better by adding month and date to years
    params.begin_date = `${params.begin_date}0101`; 
    params.end_date = `${params.end_date}1231`; 
    axios({ 
      method:'get', 
      baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?`, 
      params: params, 
      responseType: 'json'})
    .then(data => { 
        // make an arr to hold data so .map can be used to render the data
        const dataToBeRendered = [];
        const dataArr = data.data.response.docs;
        dataArr.forEach(article => {
          dataToBeRendered.push({
            web_url: article.web_url,
            snippet: article.snippet,
            pub_date: article.pub_date
          });
        });
        // then setState and clean out form input state
        this.setState({
          articles: dataToBeRendered,
          q:" ",
          begin_date: " ",
          end_date: " "
        });
      }); 
    }

  // when save button is clicked post the article to my db
  saveArticle(article){
    axios({
      method:'post',
      baseURL: '/api',
      data: {
          data: article
      }
    }).then(response => {
      // update state with each saved article
      let newState = [];
      newState.push(response.data);
      this.setState({
          savedData: (newState).concat(this.state.savedData)
      })
    })
  }

  // pass the id associated with the article and tell mongo to delete it 
  deleteArticle(id) {
    axios({
      method:'get',
      baseURL: `/api/delete/${id}`,
    }).then(response => {
      // update state accordingly
      this.setState({
        savedData: this.state.savedData.filter(article => {
          return article._id !== response.data._id
        })
      })
    })
  }

  update(data){
    return (
      <tbody>
        {
          data.map((article, i) => {
            return (
              <Article key={i}
                article={article}
                deleteArticle={this.deleteArticle}
              />
            )
          })
        }
      </tbody>
    )
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
                    end={this.state.end_date}/>
                  <Results 
                    articles={this.state.articles}
                    saveArticle ={this.saveArticle}/>
                </div>
              }/>
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
                    end={this.state.end_date}/>
                  <Results 
                    articles={this.state.articles}
                    saveArticle ={this.saveArticle}/>
                </div>  
              }/>
          <Route path='/saved'
            exact={true}
            render={() => 
              <SavedArticles 
                savedData={this.state.savedData}
                update={this.update}
                deleteArticle={this.deleteArticle}/>
            }/>
        </div>
      </Router>
    )
  }
}