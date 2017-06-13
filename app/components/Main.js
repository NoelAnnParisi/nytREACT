import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import SavedArticles from './SavedArticles';

export default class Main extends React.Component {
  render() {
    return (
    	<div>
    		<Header />
    		<Search />
    		<Results />
    		<SavedArticles />
    	</div>
      )
  }
}

