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
    let formValues = {
        q: this.state.q,
        begin_date: this.state.begin_date,
        end_date: this.state.end_date
    }
    let params = Object.assign(formValues, {'api-key': "8d32a9732f3f4185838455317f461bd3"}) 
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
    }).then(response => {
      let newState = [];
      newState.push(response.data);
      this.setState({
          savedData: (newState).concat(this.state.savedData)
      })
    })
  }
  deleteArticle(id) {
    axios({
      method:'get',
      baseURL: `/api/delete/${id}`,
    }).then(response => {
      console.log(`response.data: ${JSON.stringify(response, null, 2)}`);
      this.setState({
        savedData: this.state.savedData.filter(article => {
          return article._id !== response.data._id
        })
      })
    })
  }
  update(data){
      return data.map(article => {
        return (
          <tr 
          key={article._id}>
            <td>
              <a target="_blank" 
                href={article.web_url}>
                {article.snippet}
              </a>
            </td>
            <td>
              <Button 
                ref={article._id}
                color="danger"
                onClick={() => {
                  this.deleteArticle(article._id)
                }}>
                Delete
              </Button>
            </td>
          </tr>
        )
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
              render={() => 
                <SavedArticles 
                  savedData={this.state.savedData}
                  update={this.update}
                  deleteArticle={this.deleteArticle}/>
              }
          />
        </div>
      </Router>
    )
  }
}

//this.deleteArticle(this.props.id);
//console.log(`${this.props.id}`)