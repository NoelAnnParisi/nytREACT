import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import SavedArticles from './SavedArticles';

const bodyStyle = {
	padding: "2%"
}
export default class Main extends React.Component {
  render() {
    return (
    	<div style={bodyStyle}>
    		<Header />
    		<Search />
    		<Results />
    		<SavedArticles />
    	</div>
      )
  }
}

